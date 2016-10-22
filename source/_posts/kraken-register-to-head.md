---
title: registerToHead
version: 0.0.1
contributors:
    - Pandaros
languages:
    - JavaScript
---

# kraken-register-to-head

## Install 

`npm install https://github.com/code-arcs/kraken-register-to-head.git#head --save`

## Usage

 `server.start(() => {
    const registerToHead = require('registerToHead');
    registerToHead.register(options);
 });
 `
 
 * Options:
    * uri: uri were the kraken-head is running
    * body: information about the tentacle
        * host: tentacle host
        * port: tentacle post
        * prefix: tentacle prefix 