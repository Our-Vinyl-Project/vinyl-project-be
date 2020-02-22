// takes in username
// outputs array (of releases) of arrays of saleItems as objects
// for each saleItem, add suggestedPrice based on condition

const getWantList = require('../services/getWantList');
const getWantListSuggestedPrices = require('../services/getWantListSuggestedPrices');
const { getSaleItems, makeWantsArray } = require('./getSaleItems');

const username = 'okFox';
const userWantList = getWantList(username);
// hit discogs API for JSON user want list

const userWantListArray = makeWantsArray(userWantList);
// parsing out release ids

const wantListSuggestedPrices = getWantListSuggestedPrices(userWantListArray);
// getting all daily suggested prices for each of the release ids

const saleItems = getSaleItems(userWantList);
// getting all the items for sale for each release

const insertSuggestedPrices = (suggestedPricesArray, saleItemsArray) => {

};
