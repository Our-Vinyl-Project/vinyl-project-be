/*
Based on: Discogs Marketplace API
Original author: Daniel Biwer (danbiwer@gmail.com)
*/

const cheerio = require('cheerio');
const superagent = require('superagent');
const Throttle = require('superagent-throttle');
require('superagent-retry-delay')(superagent);

let throttle = new Throttle({
  active: true,
  rate: 25,
  ratePer: 60000
});

const util = module.exports = {};

util.processBody = function(body, params){
  const result = {};
  const listing = [];
  const $ = cheerio.load(body);
  const paginationBody = $('.pagination.bottom').get();
  const pagination = util.processPaginationResponse(paginationBody, params);
  if(!($('.shortcut_navigable').length))
    listing.push({
      title: $('title').text().slice(0, -19), 
      thumbnail: $('.thumbnail_center img').eq(0).attr('src')
    });
  else {
    $('.shortcut_navigable').each(function(i, obj){
      const item = util.processItem(obj);
      item.thumbnail = $('.thumbnail_center img').eq(0).attr('src');
      listing.push(item);
    });
  }
  result.pagination = pagination;
  result.listing = listing;
  result.id = params.id;
  result.type = params.type;
  result.thumbnail = $('.thumbnail_center img').eq(0).attr('src');
  return result;
};

util.processItem = function(obj){
  const $ = cheerio.load(obj);
  const item = {};
  item.title = $('.item_description_title').text();
  item.condition_sleeve = $('.item_sleeve_condition').text();
  item.condition_media = $('.item_condition span').eq(2).text().trim();
  item.seller = $('.seller_info a').eq(0).text();
  item.ships_from = $('.seller_info li').eq(2).text().replace('Ships From:', '');
  item.price = $('.price').eq(0).text();
  item.shipping = $('.item_shipping').eq(0).text();
  item.converted_price = $('.converted_price').eq(0).text();
  item.release_link = $('.item_release_link').eq(0).attr('href');
  item.id = $('.item_description a').eq(0).attr('href');
 
  return item;
};

util.processPaginationResponse = function(obj, params){
  const $ = cheerio.load(obj);
  const result = {};
  const tempString = $('.pagination_total').text().split('of')[1].trim();
  const totalItems = parseFloat(tempString.replace(',', '')) || 0;
  const perPage = (params.pagination && params.pagination.per_page) || 250;
  result.items = totalItems;
  result.hasNext = $('.pagination_next').is('a');
  result.totalPages = Math.ceil((totalItems / perPage));
  return result;
};

util.generateResult = async(params, callback) => {
  try {
    const response = await superagent
      .get(`https://www.discogs.com/sell/release/${params.id}`)
      .set('User-Agent', 'DiscogsMarketAPI/1.0')
      .use(throttle.plugin)
      .retry(3, [1000, 1000, 1000], [401, 404]);
    const result = util.processBody(response.text, params);
    callback(result);
  }
  catch(error){
    console.log(error); //eslint-disable-line
  }
};
