const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin");


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },  
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Output Management',
        template: './src/index.html',
     
    }),
    new GoogleFontsPlugin({
      fonts: [
        { family: "Roboto"},
        { family: "Open Sans"},
      ],
      local: false,
    }),
  ],

};