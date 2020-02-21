require('dotenv').config();
const Discogs = require('disconnect').Client;

const consumerKey = process.env.CONSUMER_KEY;
const consumerSecret = process.env.CONSUMER_SECRET;
const oAuthData = {};

// const db = new Discogs().database();
// db.getRelease(176126, function(err, data){
//   console.log(data);
// });

module.exports = require('express').Router()

  .get('/authorize', function(req, res){
    const oAuth = new Discogs().oauth();
    oAuth.getRequestToken(
      consumerKey,
      consumerSecret,
      `http://${process.env.CALLBACK_HOST}/api/v1/callback`,
      (err, requestData) => {
        // Persist "requestData" here so that the callback handler can 
        // access it later after returning from the authorize url
        oAuthData.requestData = requestData;
        console.log('requestData', requestData);
        res.redirect(requestData.authorizeUrl);
      });
  })

  .get('/callback', function(req, res){
    const oAuth = new Discogs(oAuthData.requestData).oauth();
    oAuth.getAccessToken(
      req.query.oauth_verifier, // Verification code sent back by Discogs
      (err, accessData) => {
        console.log('accessData', accessData);
        // Persist "accessData" here for following OAuth calls
        oAuthData.accessData = accessData;
        //res.send('Received access token!');

        const dis = new Discogs(oAuthData.accessData);
        dis.getIdentity((err, identity) => {
          console.log(identity);
          res.send(identity);
        });
      });
  })

  .get('/identity', (req, res) => {
    const dis = new Discogs(oAuthData.accessData);
    dis.getIdentity((err, identity) => {
      console.log(identity);
      res.send(identity);
    });
  })

  .get('/imagetest', function(req, res){
    const db = new Discogs(oAuthData.accessData).database();
    db.getRelease(176126,
      (err, data) => {
        console.log('Image URL', data.images[0].resource_url);
        // const url = data.images[0].resource_url;
        // db.getImage(url, function(err, data, rateLimit){
        //   // Data contains the raw binary image data
        //   require('fs').writeFile('/tmp/image.jpg', data, 'binary', function(err){
        //     console.log('Image saved!');
        //   });
        // });
      });
  });
