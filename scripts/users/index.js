hexo.extend.generator.register('users', (locals) => {
    const users = locals.posts.map(p => p.contributors)
        .reduce((prev, cur) => prev.concat(cur), [])
        .filter(user => !!user);

    return users.map(user => {
        let posts = locals.posts.filter(post => (post.contributors || []).includes(user));
        return {
            path: `users/${user}/`,
            layout: ['user', 'index'],
            data: {
                title: user,
                posts: posts
            }
        };
    });
});

