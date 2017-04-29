const path = require('path');
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');


module.exports = {
    entry:[
    'babel-polyfill',
    `${path.resolve(APP_PATH, 'index.js')}`
    ],
    output: {
    filename: 'bundle.js',
    path: BUILD_PATH
    },
    module: {
        rules: [{
            use: [
                {
                    loader: "babel-loader"
                }
            ]
        }]
    }
};