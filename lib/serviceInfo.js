module.exports = class ServiceInfo {
    constructor(name) {
        this.name = name;
    }

    /**
     * @returns {ServiceInfo}
     */
    static create(name) {
        return new ServiceInfo(name);
    }

    /**
     * @param version
     * @returns {ServiceInfo}
     */
    setVersion(version) {
        this.version = version;
        return this;
    }

    /**
     * @param readme
     * @returns {ServiceInfo}
     */
    setReadme(readme) {
        if (readme && readme.content) {
            this.readme = new Buffer(readme.content, readme.encoding).toString();
        }
        return this;
    }

    /**
     * @param languages
     * @returns {ServiceInfo}
     */
    setLanguages(languages) {
        const languageKeys = Object.keys(languages).filter(key => key !== 'meta');
        const sum = languageKeys.map(lang => languages[lang]).reduce((prev, cur) => prev + cur, 0);
        languageKeys.forEach(lang => {
            languages[lang] = Math.ceil((languages[lang] / sum) * 100)
        });
        this.languages = Object.keys(languages).filter(key => key !== 'meta' && languages[key] >= 15);
        return this;
    }

    /**
     * @param contributors
     * @returns {ServiceInfo}
     */
    setContributors(contributors) {
        if(Array.isArray(contributors)) {
            this.contributors = contributors.filter(c => c.total !== undefined)
                .sort((a, b) => b.total - a.total)
                .map(a => `${a.author.login}`).slice(0, 4);
        }
        return this;
    }

    /**
     * @param overrides
     * @returns {ServiceInfo}
     */
    setOverrides(overrides) {
        if(overrides && overrides.content) {
            try {
                const jsonStr = new Buffer(overrides.content, overrides.encoding).toString();
                overrides = JSON.parse(jsonStr);
                this.responsibleUsers = this._getAsArray(overrides.responsibleUsers);
                this.serviceTypes = this._getAsArray(overrides.serviceTypes);
            } catch(e) {}
        }

        return this;
    }

    /**
     * @param what
     * @returns {*[]}
     * @private
     */
    _getAsArray(what) {
        if(what) {
            return Array.isArray(what) ? what : [what];
        }
    }
};

