module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'dist/app.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.s?css$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'resolve-url',
          'sass?sourceMap'
        ]
      },
      {
        test: /\.(eot|woff2?|ttf|svg)(\?.+)?$/,
        loader: 'file',
        query: {
          name: 'dist/[name].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.min.js'],
    modulesDirectories: ['src', 'node_modules']
  },
  devtool: 'source-map'
};
