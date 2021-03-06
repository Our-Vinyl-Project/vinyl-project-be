jest.mock('../getSaleItems');
const { marketplaceSearch, marketplaceSearchByRelease } = require('../getSaleItems');

describe('marketPlaceSearch function', () => {
  it('retrieves an array of sale items for a given release', async() => {
    const search = await marketplaceSearch('release', 4282482);
    expect(search).toEqual({
      pagination: { items: 3, hasNext: false, totalPages: 1 },
      listing: [
        {
          title: 'The Stooges - The Stooges (LP, Album, CP )',
          condition_sleeve: 'Very Good (VG)',
          condition_media: 'Very Good Plus (VG+)',
          seller: 'compwiz4u',
          ships_from: 'United States',
          price: '$299.00',
          shipping: '\n        + $5.00\n                \n                shipping',
          converted_price: '            $304.00 total',
          release_link: '/The-Stooges-The-Stooges/release/4282482',
          id: '/sell/item/782289920'
        },
        {
          title: 'The Stooges - The Stooges (LP, Album, CP )',
          condition_sleeve: 'Very Good Plus (VG+)',
          condition_media: 'Very Good Plus (VG+)',
          seller: 'mm74',
          ships_from: 'Italy',
          price: '€340.00',
          shipping: '\n        + shipping',
          converted_price: 'about $369.57',
          release_link: '/The-Stooges-The-Stooges/release/4282482',
          id: '/sell/item/1041594205'
        },
        {
          title: 'The Stooges - The Stooges (LP, Album, CP )',
          condition_sleeve: 'Near Mint (NM or M-)',
          condition_media: 'Near Mint (NM or M-)',
          seller: 'johem',
          ships_from: 'Germany',
          price: '€490.00',
          shipping: '\n        + shipping',
          converted_price: 'about $532.61',
          release_link: '/The-Stooges-The-Stooges/release/4282482',
          id: '/sell/item/1052174199'
        }
      ],
      id: 4282482,
      type: 'release',
      thumbnail: 'https://img.discogs.com/kmwujHzuyUhKgMFowrB6lQ_EHkY=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-4282482-1375913082-1796.jpeg.jpg'
    });
    expect(marketplaceSearch).toHaveBeenCalledTimes(1);
    expect(marketplaceSearch).toHaveBeenCalledWith('release', 4282482);
  });
});

describe('marketPlaceSearchByRelease', () => {
  it('returns a marketplaceSearch object given only an id', async() => {
    const search = await marketplaceSearchByRelease(4282482);
    expect(search).toEqual({
      pagination: { items: 3, hasNext: false, totalPages: 1 },
      listing: [
        {
          title: 'The Stooges - The Stooges (LP, Album, CP )',
          condition_sleeve: 'Very Good (VG)',
          condition_media: 'Very Good Plus (VG+)',
          seller: 'compwiz4u',
          ships_from: 'United States',
          price: '$299.00',
          shipping: '\n        + $5.00\n                \n                shipping',
          converted_price: '            $304.00 total',
          release_link: '/The-Stooges-The-Stooges/release/4282482',
          id: '/sell/item/782289920'
        },
        {
          title: 'The Stooges - The Stooges (LP, Album, CP )',
          condition_sleeve: 'Very Good Plus (VG+)',
          condition_media: 'Very Good Plus (VG+)',
          seller: 'mm74',
          ships_from: 'Italy',
          price: '€340.00',
          shipping: '\n        + shipping',
          converted_price: 'about $369.57',
          release_link: '/The-Stooges-The-Stooges/release/4282482',
          id: '/sell/item/1041594205'
        },
        {
          title: 'The Stooges - The Stooges (LP, Album, CP )',
          condition_sleeve: 'Near Mint (NM or M-)',
          condition_media: 'Near Mint (NM or M-)',
          seller: 'johem',
          ships_from: 'Germany',
          price: '€490.00',
          shipping: '\n        + shipping',
          converted_price: 'about $532.61',
          release_link: '/The-Stooges-The-Stooges/release/4282482',
          id: '/sell/item/1052174199'
        }
      ],
      id: 4282482,
      type: 'release',
      thumbnail: 'https://img.discogs.com/kmwujHzuyUhKgMFowrB6lQ_EHkY=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-4282482-1375913082-1796.jpeg.jpg'
    });
    expect(marketplaceSearchByRelease).toHaveBeenCalledTimes(1);
    expect(marketplaceSearchByRelease).toHaveBeenCalledWith(4282482);
  });
});
