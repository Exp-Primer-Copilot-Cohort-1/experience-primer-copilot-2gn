// Create web server
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var path = require('path');
var comments = require('./comments.json');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Get comments
app.get('/comments', function (req, res) {
    res.json(comments);
});

// Add comments
app.post('/comments', function (req, res) {
    var comment = {
        id: comments.length + 1
    };
})