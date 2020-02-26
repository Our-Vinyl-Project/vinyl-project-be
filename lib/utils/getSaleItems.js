const marketplace = require('../scraper/search');

const marketplaceSearch = (type, wantId) =>
  new Promise((resolve, reject) => 
    marketplace.search({ id: wantId, type },
      result => {
        if(result instanceof Error) return reject(result);
        return resolve(result);
      }));

const marketplaceSearchByRelease = marketplaceSearch.bind(null, 'release');

module.exports = {
  marketplaceSearch,
  marketplaceSearchByRelease
};

// marketplaceSearch('release', 2366432).then(console.log);