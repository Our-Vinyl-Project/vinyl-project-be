const marketplace = require('../scraper/search');

const makeWantsArray = ({ wants }) => wants.map(want => want.id);

const marketplaceSearch = (wantId, type = 'release') =>
  new Promise((resolve, reject) => 
    marketplace.search({ id: wantId, type },
      result => {
        if(result instanceof Error) return reject(result);
        return resolve(result);
      }));

const getSaleItems = ({ wants }) =>
  Promise.all(wants.map(want => marketplaceSearch(want.id, 'release')));

const dummyData = { //eslint-disable-line
  'wants': [
    {
      'rating': 0,
      'resource_url': 'https://api.discogs.com/users/aaroncmullan/wants/4282482',
      'basic_information': {
        'labels': [
          {
            'name': 'Elektra',
            'entity_type': '1',
            'catno': 'EKS-74051',
            'resource_url': 'https://api.discogs.com/labels/651',
            'id': 651,
            'entity_type_name': 'Label'
          }
        ],
        'year': 1969,
        'master_url': 'https://api.discogs.com/masters/38215',
        'artists': [
          {
            'join': '',
            'name': 'The Stooges',
            'anv': '',
            'tracks': '',
            'role': '',
            'resource_url': 'https://api.discogs.com/artists/39770',
            'id': 39770
          }
        ],
        'id': 4282482,
        'thumb': '',
        'title': 'The Stooges',
        'formats': [
          {
            'descriptions': [
              'LP',
              'Album',
              'Stereo'
            ],
            'text': 'CP - Columbia Pitman Pressing',
            'name': 'Vinyl',
            'qty': '1'
          }
        ],
        'cover_image': '',
        'resource_url': 'https://api.discogs.com/releases/4282482',
        'master_id': 38215
      },
      'id': 4282482,
      'date_added': '2020-02-19T16:43:51-08:00'
    },
    {
      'rating': 0,
      'resource_url': 'https://api.discogs.com/users/aaroncmullan/wants/1292887',
      'basic_information': {
        'labels': [
          {
            'name': 'United Artists Records',
            'entity_type': '1',
            'catno': 'UAS 29 414 I',
            'resource_url': 'https://api.discogs.com/labels/4898',
            'id': 4898,
            'entity_type_name': 'Label'
          }
        ],
        'year': 1972,
        'master_url': 'https://api.discogs.com/masters/11693',
        'artists': [
          {
            'join': '',
            'name': 'Can',
            'anv': '',
            'tracks': '',
            'role': '',
            'resource_url': 'https://api.discogs.com/artists/17203',
            'id': 17203
          }
        ],
        'id': 1292887,
        'thumb': '',
        'title': 'Ege Bamyasi',
        'formats': [
          {
            'descriptions': [
              'LP',
              'Album',
              'Stereo'
            ],
            'name': 'Vinyl',
            'qty': '1'
          }
        ],
        'cover_image': '',
        'resource_url': 'https://api.discogs.com/releases/1292887',
        'master_id': 11693
      },
      'id': 1292887,
      'date_added': '2020-02-01T05:52:42-08:00'
    }
  ],
  'pagination': {
    'per_page': 50,
    'items': 2,
    'page': 1,
    'urls': {},
    'pages': 1
  }
};

getSaleItems(dummyData).then(console.log);

module.exports = {
  makeWantsArray,
  getSaleItems
};
