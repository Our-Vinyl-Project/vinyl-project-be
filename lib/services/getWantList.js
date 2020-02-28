const superagent = require('superagent');
const Throttle = require('superagent-throttle');
require('superagent-retry-delay')(superagent);

let throttle = new Throttle({
  active: true,
  rate: 25,
  ratePer: 60000
});

const getWantlist = async(username) => {
  try {
    const response = await superagent
      .get(`https://api.discogs.com/users/${username}/wants`)
      .set('user-agent', '1234')
      .use(throttle.plugin)
      .retry(3, [1000, 3000, 10000], [401, 404]);
    return response.body.wants;
  }
  catch(error){
    // eslint-disable-next-line
    console.log(error);
  }
};
// getWantlist('aaroncmullan').then(console.log());

module.exports = getWantlist;
