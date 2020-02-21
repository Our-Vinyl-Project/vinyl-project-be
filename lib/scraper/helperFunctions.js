const marketplace = require('./search');

export const makeArrayofWantItems = (data) => data.wants.map(want => want.id);

export const getSaleItemsFromUserWantsArray = (array) => {
  array.forEach(item => {
    marketplace.search({ id: item, type: 'release' }, (
      result
    ) => {
      if((result instanceof Error))
        console.log(result);
      else return result;
    });
  });
};
