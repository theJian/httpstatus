const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

// Paths to be used for webpack configuration
const paths = {
  appSrc: path.join(process.cwd(), 'src'),
  appIndex: path.join(process.cwd(), 'src', 'index.ts'),
  appBuild: path.join(process.cwd(), 'build'),
  public: '/'
}

module.exports = {
  mode: "development",
  entry: {
    main: [
      // Include an alternative client for WebpackDevServer. A client's job is to
      // connect to WebpackDevServer by a socket and get notified about changes.
      // When you save a file, the client will either apply hot updates (in case
      // of CSS changes), or refresh the page (in case of JS changes). When you
      // make a syntax error, this client will display a syntax error overlay.
      // Note: instead of the default WebpackDevServer client, we use a custom one
      // to bring better experience from Create React App users. You can replace
      // the line below with these two lines if you prefer the stock client:
      // require.resolve('webpack-dev-server/client') + '?/',
      // require.resolve('webpack/hot/dev-server'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      // Your app's code
      paths.appIndex
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  output: {
    // This does not produce a real file. It's just the virtual path that is
    // served by WebpackDevServer in development. This is the JS bundle
    // containing code from all our entry points, and the Webpack runtime.
    filename: 'static/js/bundle.js',
    // Not used in dev but WebpackDevServer crashes without it:
    path: paths.appBuild,
    // The URL that app is served from. We use "/" in development.
    publicPath: paths.public
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    // This is necessary to emit hot updates (currently CSS only):
    new webpack.HotModuleReplacementPlugin(),
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: true,
      favicon: 'public/favicon.png',
      hash: true
    }),
    // Makes environment variables available to the JS code, fallback to 'development'
    new webpack.DefinePlugin({
      DEVELOPMENT: JSON.stringify(process.env.NODE_ENV === 'development')
    }),
  ],
  devtool: 'inline-source-map'
}
