const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry:{
        main: './src/index.js'
    },
    output:{
        filename:'[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    watch:true,
    watchOptions: {
        ignored: ['node_modules/**']
    },
    plugins: [
      new HtmlWebpackPlugin({
      filename: 'index.html',
      template:'src/index.html',
      title:'auteco'
      }),
      new HtmlWebpackPlugin({
        filename: 'producto.html',
        template: 'src/producto.html',
        title:'auteco-product'
      }),
      new HtmlWebpackPlugin({
        filename: 'category.html',
        template: 'src/category.html',
        title:'auteco-category'
      }),
      new MiniCSSExtractPlugin({
        filename: "styles.css"
      })
    ],
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loaders: ["babel-loader"],
          },
          { 
            test: /\.scss$/, 
            loader: [
              MiniCSSExtractPlugin.loader,
              "css-loader",
              'sass-loader'
            ]
          },
          {
            test: /\.woff(2)?(\?[a-z0-9]+)?$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff"
          }, {
            test: /\.(woff|woff2|eot|ttf|svg)$/,
            loader: "url-loader?limit=100000"
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              'file-loader',
          ],
          
         }
        ]
    },
    devServer: {
        port: 9000
    }
    
}