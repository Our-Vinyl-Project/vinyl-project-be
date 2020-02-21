const sample suggestedPrices = {//eslint-disable-line
  'Very Good (VG)': { currency: 'USD', value: 170.77798861480076 },
  'Good Plus (G+)': { currency: 'USD', value: 94.87666034155598 },
  'Near Mint (NM or M-)': { currency: 'USD', value: 322.5806451612903 },
  'Good (G)': { currency: 'USD', value: 56.92599620493358 },
  'Very Good Plus (VG+)': { currency: 'USD', value: 246.67931688804555 },
  'Mint (M)': { currency: 'USD', value: 360.5313092979127 },
  'Fair (F)': { currency: 'USD', value: 37.95066413662239 },
  'Poor (P)': { currency: 'USD', value: 18.975332068311197 }
};

const dummyArray = [4282482, 1292887]; //eslint-disable-line

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
