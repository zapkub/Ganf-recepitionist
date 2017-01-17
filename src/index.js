// @flow
const path = require('path')
const express = require('express');
const app = express();
const fs = require('fs');
const https = require('https');



app.set('port', (process.env.PORT || 5000));

app.get('/', function(req ,res) {
    res.send('Hi, my name s Ganf')
});
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

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});