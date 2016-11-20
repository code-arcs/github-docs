hexo.extend.generator.register('messages', (locals) => {
    const messages = [];

    locals.posts.forEach(post => {
        if (post.message) {
            if (Array.isArray(post.message.send)) {
                post.message.send.forEach(item => pushMessageBase64unique(messages, item));
            }
            if (Array.isArray(post.message.consume)) {
                post.message.consume.forEach(item => pushMessageBase64unique(messages, item));
            }
        }
    });

    return messages.map(message => {
        let messageKey = new Buffer(message, 'base64').toString('ascii');
        let servicesSendingMessage = locals.posts.filter(post => post.message && Array.isArray(post.message.send) && post.message.send.includes(messageKey));
        let servicesConsumingMessage = locals.posts.filter(post => post.message && Array.isArray(post.message.consume) && post.message.consume.includes(messageKey));

        return {
            path: `message/${message}/`,
            layout: ['message', 'index'],
            data: {
                title: messageKey,
                posts: {
                    send: servicesSendingMessage,
                    consume: servicesConsumingMessage
                }
            }
        };
    })

    function pushMessageBase64unique(messages, item) {
        let searchElement = new Buffer(item).toString('base64');
        if (!messages.includes(searchElement)) {
            messages.push(searchElement)
        }
    }
});

