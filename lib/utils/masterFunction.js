const getWantlist = require('../services/getWantList');
const getSuggestedPrices = require('../services/getSuggestedPrices');

const masterFunction = (userid) => {
  const wantlist = getWantlist(userid);
  wantlist.forEach(want => {
  suggestedPrices = getSuggestedPrices(want);
  saleitems = getSaleItems 
  });
  const saleitems 

};
