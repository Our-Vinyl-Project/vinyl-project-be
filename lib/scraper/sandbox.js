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
    console.log(error); //eslint-disable-line
  }
};

const dummyWantedArray = [4282482, 1292887]; 

const getSuggestedPricesFromUserWantsArray = (array) => {
  return Promise.all(array.map(async(item) => {
    const suggestedPrices = await getSuggestedPrices(item);
    console.log(suggestedPrices);
    return { id: item, ...suggestedPrices };
  }));
};

getSuggestedPricesFromUserWantsArray(dummyWantedArray).then(console.log);
