cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/io.jxcore.node/www/jxcore.js",
        "id": "io.jxcore.node.jxcore",
        "clobbers": [
            "jxcore"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.1-dev",
    "io.jxcore.node": "0.0.1-dev"
}
// BOTTOM OF METADATA
});