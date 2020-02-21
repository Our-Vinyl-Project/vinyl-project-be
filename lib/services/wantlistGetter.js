const superagent = require('superagent');

const getWantlist = async(username) =>{
  try {
    const response = await superagent
      .get(`https://api.discogs.com/users/${username}/wants`)
      .set('user-agent', '1234');
    return response.body;
  }
  catch(error){
    console.log(error);
  }
  // return response.body;
};

module.exports = { getWantlist } ;
