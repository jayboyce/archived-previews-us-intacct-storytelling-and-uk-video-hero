;(function(global) {
    global.require = global.require || {};
    global.require.waitSeconds = 0;
    // baseUrl points at the live site so any non-bundled lazy module (hotfixes,
    // templates, etc.) still resolves. Bundled modules load from the local bundle
    // via require.bundles (see SageDotCom.bundle.config.js).
    global.require.baseUrl = 'https://www.sage.com/Areas/SageDotCom/js';
})(this /* window */);
