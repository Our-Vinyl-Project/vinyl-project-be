const superagent = require('superagent');

const getSuggestedPrices = async(releaseID) => {
  try {
    const response = await superagent
      .get(`https://api.discogs.com/marketplace/price_suggestions/${releaseID}`)
      .set('Authorization', 'Discogs token=ghLhhhMxnIqirLVgPRpbwjifYkcuYfkkNERUlDWl')
      .set('user-agent', '1234');
    return response.body;
  }
  catch(error){
    // eslint-disable-next-line
    console.log(error);
  }
};
getSuggestedPrices(1292887).then(console.log);

module.exports = { getSuggestedPrices } ;
