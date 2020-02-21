const superagent = require('superagent');
const marketplace = require('./search');

export const makeArrayofWantItems = (data) => data.wants.map(want => want.id);

export const getSaleItemsFromUserWantsArray = (array) => {
  array.forEach(item => {
    marketplace.search({ id: item, type: 'release' }, (
      result
    ) => {
      if((result instanceof Error))
        console.log(result); //eslint-disable-line
      else return result;
    });
  });
};

export const getSuggestedPrices = async(releaseID) => {
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
