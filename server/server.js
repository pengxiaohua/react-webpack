const express = require('express');
const ReactSSR = require('react-dom/server');
const serverEntry = require('../dist/server-entry.js').default;
const fs = require('fs');
const path = require('path');

const app = express();
const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8');

app.use('/public', express.static(path.join(__dirname, '../dist')));

app.get('*', function(req, res) {
    const appString = ReactSSR.renderToString(serverEntry);
    res.send(template.replace('<!-- app -->', appString));
});

app.listen(3333, function(){
    console.log('server is running! Visit http://localhost:3333');
});