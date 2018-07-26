const express = require('express');
const path = require('path');
const app = express();
const ClientStatsPath = path.join(__dirname, './../dist/stats.json');
const ServerRendererPath = path.join(__dirname, './../dist/server.js');
const ServerRenderer = require(ServerRendererPath).default;
const Stats = require(ClientStatsPath);

// SERVER ONLY STATIC ROUTES //
app.get('/api/v1/test', (req, res) => {
  res.status(200).json({env: 'prod', msg: 'Light \'em up! We good to go!'});
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

app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use(ServerRenderer(Stats));

const PORT = process.env.PORT || 3000;

app.listen(PORT, error => {
    if (error) {

        return console.error(error);

    } else {

        console.log(`Production Express server running at http://localhost:${PORT}`);
    }
});