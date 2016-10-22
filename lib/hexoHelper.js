'use strict';
module.exports = class HexoHelper {
    static createPost(r) {
        let post = [];
        post.push("---");
        post.push(`title: ${r.name}`);

        if(r.version) {
            post.push(`version: ${r.version}`);
        }

        if(r.serviceTypes) {
            post.push(`serviceTypes:`);
            r.serviceTypes.forEach(st => post.push(`    - ${st}`))
        }

        if(r.contributors) {
            post.push(`contributors:`);
            r.contributors.forEach(c => post.push(`    - ${c}`))
        }

        if(r.responsibleUsers) {
            post.push(`responsible:`);
            r.responsibleUsers.forEach(c => post.push(`    - ${c}`))
        }

        if(r.languages) {
            post.push(`languages:`);
            r.languages.forEach(c => post.push(`    - ${c}`))
        }

        post.push("---");
        if(r.readme) {
            post.push('');
            post.push(r.readme);
        }
        return post.join('\n');
    }
};
