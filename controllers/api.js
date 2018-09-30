// We’ll declare all our dependencies here
const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('../config/config');



router.get('/fb/comments/:post_id/:page_access_token', function(req, res, next) {
    var post_id = req.params.post_id; 
    var page_access_token = req.params.page_access_token; 
    var request_url = 'https://graph.facebook.com/v3.1/'+post_id+'/comments?access_token='+page_access_token;
    request(request_url, function (error, response, body) {
        if(error) {
            res.send(error);
            return next();
        }
        var json = JSON.parse(body);
            res.json(json);
            console.log(json)
            return next();
        });
});

router.get('/ig/comments/:ig_page_id/:page_access_token', function(req, res, next) {
    var ig_page_id = req.params.ig_page_id; 
    var page_access_token = req.params.page_access_token; 
    var request_url = 'https://graph.facebook.com/v3.1/'+ig_page_id+'?fields=media{shortcode,comments{username}}&access_token='+page_access_token;
    request(request_url, function (error, response, body) {
        if(error) {
            res.send(error);
            return next();
        }
        var json = JSON.parse(body);
            res.json(json);
            console.log(json)
            return next();
        });
});

router.get('/ig/ig_page_id/:page_access_token', function(req, res, next) {
    var page_access_token = req.params.page_access_token; 
    var request_url = 'https://graph.facebook.com/me?fields=instagram_business_account&access_token='+page_access_token;
    request(request_url, function (error, response, body) {
        if(error) {
            res.send(error);
            return next();
        }
        var json = JSON.parse(body);
            res.json(json);
            console.log(json)
            return next();
        });
});


module.exports = router 