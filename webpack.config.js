const path  =  require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry:'./src/index.js',
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.(png|svg|jpg|gif)$/,
        use:[
          'file-loader'
        ]
      },{
      test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },{
        test:/\.html$/,
        use:[
          {
            loader:'html-loader',
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebPackPlugin({
      template: "./src/template/index.html",
      filename: "./index.html"
    })
  ]

}