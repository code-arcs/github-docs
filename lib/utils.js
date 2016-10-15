const GitHubApi = require("github");
const Bluebird = require("bluebird");
const ServiceInfo = require("./serviceInfo");

module.exports = class Util {
    constructor(username, password, org) {
        this.username = username;
        this.password = password;
        this.org = org;
        this.github = this.connectToGithub();
    }

    getConnection() {
        return this.github;
    }

    connectToGithub() {
        const github = new GitHubApi({
            // debug: true,
            protocol: "https",
            host: "api.github.com",
            headers: {
                "user-agent": "My-Cool-GitHub-App" // GitHub is happy with a unique user agent
            },
            Promise: require('bluebird'),
            followRedirects: false, // default: true; there's currently an issue with non-get redirects, so allow ability to disable follow-redirects
            timeout: 5000
        });

        github.authenticate({
            type: "basic",
            username: this.username,
            password: this.password
        });

        return github;
    }

    getServiceInfo(name) {
        const config = {owner: this.org, repo: name};
        const promises = [
            this.getServiceDocFile(config),
            this.github.repos.getReadme(config),
            this.github.repos.getLanguages(config),
            this.github.repos.getStatsContributors(config),
            this._getFile(config, 'pom.xml'),
            this._getFile(config, 'package.json')
        ];

        return Promise.all(promises)
            .then(resp => {
                var overrides = resp[0];
                var readme = resp[1];
                var languages = resp[2];
                var contributors = resp[3];
                let version;

                const pom = resp[4];
                if(pom) {
                    let result = this._processPom(pom);
                    name = result.name ? result.name : name;
                    version = result.version ? result.version : version;
                }

                const packageJson = resp[5];
                if(packageJson) {
                    let result = this._processPackageJson(packageJson);
                    name = result.name ? result.name : name;
                    version = result.version ? result.version : version;
                }

                return ServiceInfo.create(name)
                    .setVersion(version)
                    .setReadme(readme)
                    .setLanguages(languages)
                    .setContributors(contributors)
                    .setOverrides(overrides);
            });
    }

    getJavaServices() {
        return this.github.repos.getForOrg({org: this.org, repo: 100})
            .then(r => r.map(r => r.name))
            .then(names => Bluebird.all(names.map(name => {
                return this.github.repos.getContent({owner: this.org, repo: name, path: 'pom.xml'})
                    .then(() => name)
                    .catch(() => Bluebird.resolve());
            })))
            .then(names => names.filter(name => name !== undefined));
    }

    getServiceDocFile(config) {
        return this._getFile(config, '.service.doc');
    }

    _getFile(config, path) {
        config.path = path;
        return new Promise(resolve => {
            this.github.repos.getContent(config)
                .then(r => resolve(r))
                .catch(r => resolve(undefined));
        });
    }

    _processPom(pom) {
        const result = {};
        const pomStr = this._getFileContents(pom);

        const nameMatch = pomStr.match("<name>(.*)</name>");
        if(nameMatch) {
            result.name = nameMatch[1];
        }

        const versionMatch = pomStr.match("<version>(.*)</version>");
        if(versionMatch) {
            result.version = versionMatch[1];
        }

        if(Object.keys(result).length > 0) {
            return result;
        }
    }

    _processPackageJson(packageJson) {
        return JSON.parse(this._getFileContents(packageJson));
    }

    _getFileContents(file) {
        if(file && file.content && file.encoding) {
            return new Buffer(file.content, file.encoding).toString();
        }
    }
};
