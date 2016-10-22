'use strict';
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
const gitHubConnection = github.getConnection();

const r = gitHubConnection.repos.getForOrg({org: ORG})
    .then(repositories => {
        repositories.map(repository => repository.name)
            .forEach(createPostForEachRepository)
    });

function createPostForEachRepository(name){
    github.getServiceInfo(name)
        .then(r => fs.writeFileSync(`./source/_posts/${name}.md`, HexoHelper.createPost(r), 'utf8'));
}

// services.forEach(name => {
//     github.getServiceInfo(name)
//         .then(r => fs.writeFileSync(`./source/_posts/${name}.md`, HexoHelper.createPost(r), 'utf8'));
// });
