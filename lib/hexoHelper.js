'use strict';
module.exports = class HexoHelper {
    static createPost(r) {
        let post = [];
        post.push("---");
        post.push(`title: ${r.name}`);

        if(r.version) {
            post.push(`version: ${r.version}`);
        }

        if(HexoHelper.propertyIsSetAndArray(r.serviceTypes)) {
            post.push(`serviceTypes:`);
            r.serviceTypes.forEach(st => post.push(`    - ${st}`))
        }

        if(HexoHelper.propertyIsSetAndArray(r.contributors)) {
            post.push(`contributors:`);
            r.contributors.forEach(c => post.push(`    - ${c}`))
        }

        if(HexoHelper.propertyIsSetAndArray(r.responsibleUsers)) {
            post.push(`responsible:`);
            r.responsibleUsers.forEach(c => post.push(`    - ${c}`))
        }

        if(HexoHelper.propertyIsSetAndArray(r.languages)) {
            post.push(`languages:`);
            r.languages.forEach(c => post.push(`    - ${c}`))
        }

        if(HexoHelper.propertyIsSetAndArray(r.uses)) {
            post.push(`uses:`);
            r.uses.forEach(c => post.push(`    - ${c}`))
        }

        if(r.message) {
            post.push(`message:`);
            if(Array.isArray(r.message.send) && r.message.send.length > 0) {
                post.push(`    send:`);
                r.message.send.forEach(c => post.push(`        - ${c}`))
            }
            if(Array.isArray(r.message.consume) && r.message.consume.length > 0) {
                post.push(`    consume:`);
                r.message.consume.forEach(c => post.push(`        - ${c}`))
            }
        }

        post.push("---");
        if(r.readme) {
            post.push('');
            post.push(r.readme);
        }
        return post.join('\n');
    }

    static propertyIsSetAndArray(p) {
        return Array.isArray(p) && p.length > 0;
    }
};
