const superagent = require('superagent');

const getWantlist = async(username) =>{
  return superagent
    .get(`https://api.discogs.com//users/${username}/wants`)
    .then(res => res.body);
};
  
const test = getWantlist('aaroncmullan');
console.log(test);
