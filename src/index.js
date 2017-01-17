// @flow
const path = require('path')
const express = require('express');
const app = express();
const fs = require('fs');
const https = require('https');

var options = {
    key: fs.readFileSync(path.join(__dirname, './key.pem')),
    cert: fs.readFileSync(path.join(__dirname, './cert.pem')),
    passphrase: 'butthole',
};

app.get('/webhook', function (req, res) {
    if (req.query['hub.mode'] === 'subscribe' &&
        req.query['hub.verify_token'] === "raise-of-my-butt-hole") {
        console.log("Validating webhook");
        res.status(200).send(req.query['hub.challenge']);
    } else {
        console.error("Failed validation. Make sure the validation tokens match.");
        res.sendStatus(403);
    }
});

https.createServer(options, app).listen(3000);