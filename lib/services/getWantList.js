const superagent = require('superagent');

const getWantlist = async(username) => {
  try {
    const response = await superagent
      .get(`https://api.discogs.com/users/${username}/wants`)
      .set('user-agent', '1234');
    return response.body.wants;
  }
  catch(error){
    // eslint-disable-next-line
    console.log(error);
  }
};
// getWantlist('aaroncmullan').then(console.log());

module.exports = getWantlist;
