(function() {
    require.config({
        "baseUrl": "js",
        "paths": {
            "vue": "../node_modules/vue/dist/vue.min",

            "es6": "../node_modules/requirejs-babel/es6",
            "babel": "../node_modules/babel-core/browser.min",
            "babel-polyfill": "../node_modules/babel-core/browser-polyfill.min",

            "text": "../node_modules/requirejs-text/text"
        },
        "config": {
            "es6": {
                "resolveModuleSource": function(source) {
                    // don't compile what doesn't need to be compiled.
                    // this simply tests to see if  we're loading a library.
                    // if we are, don't compile it (assuming we don't want to)
                    // this can be added on to as more libraries are added.
                    if(!/^babel|^vue|^text/.test(source)) {
                        return "es6!" + source;
                    } else {
                        return source;
                    }
                }
            }
        }
    });
})();