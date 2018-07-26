const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const path = require('path');
const app = express();
const webpack = require('webpack');
const config = require('./../webpack/webpack.development.config.js');
const compiler = webpack(config);
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// SERVER ONLY STATIC ROUTES //
app.get('/api/v1/test', (req, res) => {
  res.status(200).json({env: 'dev', msg: 'Light \'em up! We good to go!'});
});
/*
app.get('/robots.txt', (req, res) => {
  res.contentType('text/plain');
  res.sendFile(path.resolve(__dirname, 'robots.txt'));
});

app.get('/sitemap.xml', (req, res) => {
  res.contentType('application/xml');
  res.sendFile(path.resolve(__dirname, 'sitemap.xml'));
});
 */

app.use(webpackDevMiddleware(compiler, {
    publicPath: "/dist/",
}));
app.use(webpackHotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client')));
app.use(webpackHotServerMiddleware(compiler));

const PORT = process.env.PORT || 3000;

app.listen(PORT, error => {
    if (error) {
        return console.error(error);
    } else {
        console.log(`Development Express server running at http://localhost:${PORT}`);
    }
});