// webpack.config.js

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//var ExtractTextPlugin = require('extract-text-webpack-plugin'); // Para exportar los css.
var isDev= true;
var SRC_DIR = path.join(__dirname, 'src');
var DIST_DIR = path.join(__dirname, 'build');

module.exports = {
    mode: 'development',
    context: SRC_DIR, // Carpeta fuente de donde vamos a leer los ficheros.
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Vamos a procesar todas estas extensiones. El resto LO IGNORARÁ en el bundling.
alias: {
      'redux-devtools': path.join(__dirname, '..', '..', 'src'),
    }
    },
    entry: {
    app: './index.tsx',
    vendor: [
      'core-js',
      'react',
      'react-dom',
    ],

    },
    output: {
        path: DIST_DIR, // Carpeta de destino.
        filename: `[name]${isDev ? '' : '[chunkhash:8]'}.js`, // Fichero de salida.
    },
    devServer: {
        contentBase: DIST_DIR, //Content base
        inline: true, //Enable watch and live reload
        host: 'localhost',
        noInfo: true,
        port: 8083
      },
      devtool: 'inline-source-map',
    /* +++++++++ LO MÁS INTERESANTE: LOS LOADERS +++++++++  */
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader',
                options: {
                  useBabel: true,
                },                
            }
        ],
    },
    plugins: [
        // Caching vendors with manifest
        // https://webpack.js.org/guides/code-splitting-libraries/#manifest-file
        /*new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest'],
        }),
        /*new ExtractTextPlugin({
        filename: '[name].css',
        disable: false,
        allChunks: true,
        }),*/
        new HtmlWebpackPlugin({
        filename: 'index.html', //Name of file in ./dist/
        template: 'index.html' //Name of template in ./src
        }),
  ]
};