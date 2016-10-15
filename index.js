const GitHubApi = require("github");
const fs = require("fs");
const nconf = require("nconf");

const HexoHelper = require("./lib/hexoHelper");
const Util = require("./lib/utils");

nconf.env().argv({
    u: {
        alias: 'username',
        describe: 'GitHub username',
        demand: true,
        type: 'string'
    },
    p: {
        alias: 'password',
        describe: 'GitHub password',
        demand: true,
        type: 'string'
    },
    o: {
        alias: 'org',
        describe: 'GitHub Organisation',
        demand: true,
        type: 'string'
    }
});

const USERNAME = nconf.get('username');
const PASSWORD = nconf.get('password');
const ORG = nconf.get('org');

const github = new Util(USERNAME, PASSWORD, ORG);
const conn = github.getConnection();

const services = [
    'biccloud-webclient-login',
    'biccloud-webclient',
    'biccloud-apigateway',
    'biccloud-domain-service',
    'biccloud-method-service'
];


const r = conn.repos.getForOrg({org: 'gbtec-ag'})
    .then(r => {
        r.map(r => r.name)
            .forEach(name => {
                github.getServiceInfo(name)
                    .then(r => fs.writeFileSync(`./source/_posts/${name}.md`, HexoHelper.createPost(r), 'utf8'));
            })
    });

// services.forEach(name => {
//     github.getServiceInfo(name)
//         .then(r => fs.writeFileSync(`./source/_posts/${name}.md`, HexoHelper.createPost(r), 'utf8'));
// });
