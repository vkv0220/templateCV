var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var src = path.join(__dirname, 'src');

var config = {
    entry: {
    index: path.join(src, 'index.pug'),
    bundle: path.join(src, 'index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use:  ['html-loader', 'pug-html-loader?pretty&exports=false']
      },
      {
        test: /\.sass$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'scss-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader?name=./img/[name].[ext]'
        }
       ]
        // use: ['file-loader?name=./img/[name].[ext]', { loader: 'image-webpack-loader',
        //     options: {
        //         mozjpeg: {
        //         progressive: true,
        //         quality: 65
        //         },
        //         // optipng.enabled: false will disable optipng
        //         optipng: {
        //         enabled: true,
        //         },
        //         pngquant: {
        //         quality: '65-90',
        //         speed: 4
        //         },
        //         gifsicle: {
        //         interlaced: false,
        //         },
        //         // the webp option will enable WEBP
        //         webp: {
        //         quality: 75
        //         }
        //     }
        //     },
        //     ],
       },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader?name=./fonts/[name].[ext]'
        }
       ]
      }
    ]
  },
  plugins: [
new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'index.html',
      template: path.join(src, 'index.pug'),
    }),
  ],
};

module.exports = config;