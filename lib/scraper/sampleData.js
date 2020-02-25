const sampleSuggestedPrices = { //eslint-disable-line
  'Very Good (VG)': { currency: 'USD', value: 170.77798861480076 },
  'Good Plus (G+)': { currency: 'USD', value: 94.87666034155598 },
  'Near Mint (NM or M-)': { currency: 'USD', value: 322.5806451612903 },
  'Good (G)': { currency: 'USD', value: 56.92599620493358 },
  'Very Good Plus (VG+)': { currency: 'USD', value: 246.67931688804555 },
  'Mint (M)': { currency: 'USD', value: 360.5313092979127 },
  'Fair (F)': { currency: 'USD', value: 37.95066413662239 },
  'Poor (P)': { currency: 'USD', value: 18.975332068311197 }
};

const sampleWantsArray = [4282482, 1292887]; //eslint-disable-line

const sampleWantsObject = { //eslint-disable-line
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

const sampleScrape = { //eslint-disable-line
  pagination: { items: 3, hasNext: false, totalPages: 1 },
  listing: [
    {
      'title':'The Stooges - The Stooges (LP, Album, CP )',
      'condition_sleeve':' Very Good (VG)',
      'condition_media':'Very Good Plus (VG+)',
      'seller':'compwiz4u',
      'ships_from':'United States',
      'price':'$299.00',
      'shipping':'\n + $5.00\n \n shipping',
      'converted_price':' $304.00 total',
      'release_link':'/The-Stooges-The-Stoog es/release/4282482',
      'id':'/sell/item/782289920',
      'thumbnail':'https://img.discogs.com/kmwujHzuyUhKgMFowrB6lQ_EHkY=/fit-in/300x300/filters:strip _icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-4282482-1375913082-1796.jpeg.jpg'
    },
    {
      'title':'The Stooges - The Stooges (LP, Album, CP )',
      'condition_sleeve':'Very Good Plus (VG+)',
      'condition_media':'Very Good Plus (VG+)',
      'seller':'mm74',
      'ships_from':'Italy',
      'price':'€340.0 0',
      'shipping':'\n + shipping',
      'converted_price':'about $369.57',
      'release_link':'/The-Stooges-The-Stooges/release/4282482',
      'id':'/sell/i tem/1041594205',
      'thumbnail':'https://img.discogs.com/kmwujHzuyUhKgMFowrB6lQ_EHkY=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():q uality(40)/discogs-images/R-4282482-1375913082-1796.jpeg.jpg'
    },
    {
      'title':'The Stooges - The Stooges (LP, Album, CP )',
      'condition_sleeve':'Near Mint (NM or M-)',
      'condition_media':'Near Mint (NM or M-)',
      'seller':'johem',
      'ships_from':'Germany',
      'price':'€490.00',
      'shipping':'\n + sh ipping',
      'converted_price':'about $532.61',
      'release_link':'/The-Stooges-The-Stooges/release/4282482',
      'id':'/sell/item/1052174199',
      'thumbnail':' https://img.discogs.com/kmwujHzuyUhKgMFowrB6lQ_EHkY=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-4 282482-1375913082-1796.jpeg.jpg'
    }
  ],
  'id':4282482,
  'type':'release',
  'thumbnail':'https://img.discogs.com/kmwujHzuyUhKgMFowrB6lQ_EHkY=/fit-in/300x 300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-4282482-1375913082-1796.jpeg.jpg'
};

const sampleGetSaleItems = [ //eslint-disable-line
  {
    'pagination': {
      'items': 3,
      'hasNext': false,
      'totalPages': 1
    },
    'listing': [
      {
        'title': 'The Stooges - The Stooges (LP, Album, CP )',
        'condition_sleeve': 'Very Good (VG)',
        'condition_media': 'Very Good Plus (VG+)',
        'seller': 'compwiz4u',
        'ships_from': 'United States',
        'price': '$299.00',
        'shipping': '\n        + $5.00\n                \n                shipping',
        'converted_price': '            $304.00 total',
        'release_link': '/The-Stooges-The-Stooges/release/4282482',
        'id': '/sell/item/782289920'
      },
      {
        'title': 'The Stooges - The Stooges (LP, Album, CP )',
        'condition_sleeve': 'Very Good Plus (VG+)',
        'condition_media': 'Very Good Plus (VG+)',
        'seller': 'mm74',
        'ships_from': 'Italy',
        'price': '€340.00',
        'shipping': '\n        + shipping',
        'converted_price': 'about $369.57',
        'release_link': '/The-Stooges-The-Stooges/release/4282482',
        'id': '/sell/item/1041594205'
      },
      {
        'title': 'The Stooges - The Stooges (LP, Album, CP )',
        'condition_sleeve': 'Near Mint (NM or M-)',
        'condition_media': 'Near Mint (NM or M-)',
        'seller': 'johem',
        'ships_from': 'Germany',
        'price': '€490.00',
        'shipping': '\n        + shipping',
        'converted_price': 'about $532.61',
        'release_link': '/The-Stooges-The-Stooges/release/4282482',
        'id': '/sell/item/1052174199'
      }
    ],
    'id': 4282482,
    'type': 'release',
    'thumbnail': 'https://img.discogs.com/kmwujHzuyUhKgMFowrB6lQ_EHkY=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-4282482-1375913082-1796.jpeg.jpg'
  },
  {
    'pagination': {
      'items': 24,
      'hasNext': false,
      'totalPages': 1
    },
    'listing': [
      {
        'title': 'Can - Ege Bamyasi (LP, Album)',
        'condition_sleeve': 'Fair (F)',
        'condition_media': 'Good (G)',
        'seller': 'Mamabastardo',
        'ships_from': 'Germany',
        'price': '€85.00',
        'shipping': '\n        + shipping',
        'converted_price': 'about $92.39',
        'release_link': '/Can-Ege-Bamyasi/release/1292887',
        'id': '/sell/item/544808476'
      },
      {
        'title': 'Can - Ege Bamyasi (LP, Album)',
        'condition_sleeve': 'No Cover',
        'condition_media': 'Very Good Plus (VG+)',
        'seller': 'groovymood',
        'ships_from': 'Spain',
        'price': '€99.99',
        'shipping': '\n        + €16.00\n                \n                shipping',
        'converted_price': 'about            $126.08 total',
        'release_link': '/Can-Ege-Bamyasi/release/1292887',
        'id': '/sell/item/627512634'
      },
      {
        'title': 'Can - Ege Bamyasi (LP, Album)',
        'condition_sleeve': 'Good (G)',
        'condition_media': 'Good (G)',
        'seller': 'Tigonaroga',
        'ships_from': 'Germany',
        'price': '€104.00',
        'shipping': '\n        + shipping',
        'converted_price': 'about $113.04',
        'release_link': '/Can-Ege-Bamyasi/release/1292887',
        'id': '/sell/item/1068461066'
      },
      {
        'title': 'Can - Ege Bamyasi (LP, Album)',
        'condition_sleeve': 'Very Good (VG)',
        'condition_media': 'Very Good Plus (VG+)',
        'seller': 'LizzieSchaum',
        'ships_from': 'Germany',
        'price': '€125.00',
        'shipping': '\n        + shipping',
        'converted_price': 'about $135.87',
        'release_link': '/Can-Ege-Bamyasi/release/1292887',
        'id': '/sell/item/846658830'
      },
      {
        'title': 'Can - Ege Bamyasi (LP, Album)',
        'condition_sleeve': 'Very Good (VG)',
        'condition_media': 'Very Good (VG)',
        'seller': 'rodalquilcabo',
        'ships_from': 'Spain',
        'price': '€150.00',
        'shipping': '\n        + shipping',
        'converted_price': 'about $163.04',
        'release_link': '/Can-Ege-Bamyasi/release/1292887',
        'id': '/sell/item/590364644'
      },
      {
        'title': 'Can - Ege Bamyasi (LP, Album)',
        'condition_sleeve': 'Very Good (VG)',
        'condition_media': 'Very Good Plus (VG+)',
        'seller': 'kbarn',
        'ships_from': 'United States',
        'price': '$195.00',
        'shipping': '\n        + $5.00\n                \n                shipping',
        'converted_price': '            $200.00 total',
        'release_link': '/Can-Ege-Bamyasi/release/1292887',
        'id': '/sell/item/606991031'
      },
      {
        'title': 'Can - Ege Bamyasi (LP, Album)',
        'condition_sleeve': 'Very Good (VG)',
        'condition_media': 'Very Good Plus (VG+)',
        'seller': 'radiowaves2000',
        'ships_from': 'United States',
        'price': '$200.00',
        'shipping': '\n        + shipping',
        'converted_price': '',
        'release_link': '/Can-Ege-Bamyasi/release/1292887',
        'id': '/sell/item/1056154151'
      },
      {
        'title': 'Can - Ege Bamyasi (LP, Album)',
        'condition_sleeve': 'Good Plus (G+)',
        'condition_media': 'Very Good Plus (VG+)',
        'seller': '1strecords.shop',
        'ships_from': 'Germany',
        'price': '€199.00',
        'shipping': '\n        + shipping',
        'converted_price': 'about $216.30',
        'release_link': '/Can-Ege-Bamyasi/release/1292887',
        'id': '/sell/item/1068692613'
      },
      {
        'title': 'Can - Ege Bamyasi (LP, Album)',
        'condition_sleeve': 'Very Good (VG)',
        'condition_media': 'Very Good Plus (VG+)',
        'seller': '1strecords.shop',
        'ships_from': 'Germany',
        'price': '€209.00',
        'shipping': '\n        + shipping',
        'converted_price': 'about $227.17',
        'release_link': '/Can-Ege-Bamyasi/release/1292887',
        'id': '/sell/item/1067843366'
      },
      {
        'title': 'Can - Ege Bamyasi (LP, Album)',
        'condition_sleeve': 'Very Good (VG)',
        'condition_media': 'Very Good Plus (VG+)',
        'seller': '1strecords.shop',
        'ships_from': 'Germany',
        'price': '€209.00',
        'shipping': '\n        + shipping',
        'converted_price': 'about $227.17',
        'release_link': '/Can-Ege-Bamyasi/release/1292887',
        'id': '/sell/item/1055670641'
      },
      {
        'title': 'Can - Ege Bamyasi (LP, Album)',
        'condition_sleeve': 'Very Good (VG)',
        'condition_media': 'Near Mint (NM or M-)',
        'seller': 'bigwhitebamboo',
        'ships_from': 'Germany',
        'price': '€220.00',
        'shipping': '\n        + €20.00\n                \n                shipping',
        'converted_price': 'about            $260.87 total',
        'release_link': '/Can-Ege-Bamyasi/release/1292887',
        'id': '/sell/item/1020544395'
      },
      {
        'title': 'Can - Ege Bamyasi (LP, Album)',
        'condition_sleeve': 'Good Plus (G+)',
        'condition_media': 'Very Good (VG)',
        'seller': 'OLDRECORDS12',
        'ships_from': 'Germany',
        'price': '€220.00',
        'shipping': '\n        + €5.00\n                \n                shipping',
        'converted_price': 'about            $244.57 total',
        'release_link': '/Can-Ege-Bamyasi/release/1292887',
        'id': '/sell/item/955709973'
      },
      {
        'title': 'Can - Ege Bamyasi (LP, Album)',
        'condition_sleeve': 'Very Good Plus (VG+)',
        'condition_media': 'Very Good Plus (VG+)',
        'seller': 'nevsa',
        'ships_from': 'Germany',
        'price': '€229.00',
        'shipping': '\n        + shipping',
        'converted_price': 'about $248.91',
        'release_link': '/Can-Ege-Bamyasi/release/1292887',
        'id': '/sell/item/1052204915'
      },
      {
        'title': 'Can - Ege Bamyasi (LP, Album)',
        'condition_sleeve': 'Very Good Plus (VG+)',
        'condition_media': 'Very Good Plus (VG+)',
        'seller': 'Speedgoockel',
        'ships_from': 'Germany',
        'price': '€229.40',
        'shipping': '\n        + €8.00\n                \n                shipping',
        'converted_price': 'about            $258.04 total',
        'release_link': '/Can-Ege-Bamyasi/release/1292887',
        'id': '/sell/item/623671257'
      },
      {
        'title': 'Can - Ege Bamyasi (LP, Album)',
        'condition_sleeve': 'Very Good Plus (VG+)',
        'condition_media': 'Very Good Plus (VG+)',
        'seller': 'owenscarlet',
        'ships_from': 'France',
        'price': '€240.00',
        'shipping': '\n        + €16.00\n                \n                shipping',
        'converted_price': 'about            $278.26 total',
        'release_link': '/Can-Ege-Bamyasi/release/1292887',
        'id': '/sell/item/930953293'
      },
      {
        'title': 'Can - Ege Bamyasi (LP, Album)',
        'condition_sleeve': 'Very Good Plus (VG+)',
        'condition_media': 'Very Good Plus (VG+)',
        'seller': 'VillaVinyl',
        'ships_from': 'Germany',
        'price': '€250.00',
        'shipping': '\n        + shipping',
        'converted_price': 'about $271.74',
        'release_link': '/Can-Ege-Bamyasi/release/1292887',
        'id': '/sell/item/1009829313'
      },
      {
        'title': 'Can - Ege Bamyasi (LP, Album)',
        'condition_sleeve': 'Very Good Plus (VG+)',
        'condition_media': 'Very Good Plus (VG+)',
        'seller': 'recordmania',
        'ships_from': 'Netherlands',
        'price': '€270.00',
        'shipping': '\n        + €26.80\n                \n                shipping',
        'converted_price': 'about            $322.61 total',
        'release_link': '/Can-Ege-Bamyasi/release/1292887',
        'id': '/sell/item/430199937'
      },
      {
        'title': 'Can - Ege Bamyasi (LP, Album)',
        'condition_sleeve': 'Very Good (VG)',
        'condition_media': 'Very Good Plus (VG+)',
        'seller': 'Guide',
        'ships_from': 'France',
        'price': '€290.00',
        'shipping': '\n        + shipping',
        'converted_price': 'about $315.22',
        'release_link': '/Can-Ege-Bamyasi/release/1292887',
        'id': '/sell/item/1011774521'
      },
      {
        'title': 'Can - Ege Bamyasi (LP, Album)',
        'condition_sleeve': 'Very Good Plus (VG+)',
        'condition_media': 'Very Good (VG)',
        'seller': 'recordsale-de',
        'ships_from': 'Germany',
        'price': '€313.50',
        'shipping': '\n        + €22.90\n                \n                shipping',
        'converted_price': 'about            $365.65 total',
        'release_link': '/Can-Ege-Bamyasi/release/1292887',
        'id': '/sell/item/1063596670'
      },
      {
        'title': 'Can - Ege Bamyasi (LP, Album)',
        'condition_sleeve': 'Near Mint (NM or M-)',
        'condition_media': 'Near Mint (NM or M-)',
        'seller': 'chrome-police-02',
        'ships_from': 'Germany',
        'price': '€380.00',
        'shipping': '\n        + shipping',
        'converted_price': 'about $413.04',
        'release_link': '/Can-Ege-Bamyasi/release/1292887',
        'id': '/sell/item/1042190390'
      },
      {
        'title': 'Can - Ege Bamyasi (LP, Album)',
        'condition_sleeve': 'Very Good Plus (VG+)',
        'condition_media': 'Near Mint (NM or M-)',
        'seller': 'oKami86',
        'ships_from': 'Germany',
        'price': '€530.00',
        'shipping': '\n        + €23.00\n                \n                shipping',
        'converted_price': 'about            $601.09 total',
        'release_link': '/Can-Ege-Bamyasi/release/1292887',
        'id': '/sell/item/994966683'
      },
      {
        'title': 'Can - Ege Bamyasi (LP, Album)',
        'condition_sleeve': 'Near Mint (NM or M-)',
        'condition_media': 'Near Mint (NM or M-)',
        'seller': 'Plihan',
        'ships_from': 'Russian Federation',
        'price': '€999.00',
        'shipping': '\n        + shipping',
        'converted_price': 'about $1,085.87',
        'release_link': '/Can-Ege-Bamyasi/release/1292887',
        'id': '/sell/item/796001985'
      },
      {
        'title': 'Can - Ege Bamyasi (LP, Album)',
        'condition_sleeve': 'Near Mint (NM or M-)',
        'condition_media': 'Mint (M)',
        'seller': 'Plihan',
        'ships_from': 'Russian Federation',
        'price': '€1,250.00',
        'shipping': '\n        + shipping',
        'converted_price': 'about $1,358.70',
        'release_link': '/Can-Ege-Bamyasi/release/1292887',
        'id': '/sell/item/571722306'
      },
      {
        'title': 'Can - Ege Bamyasi (LP, Album)',
        'condition_sleeve': 'Mint (M)',
        'condition_media': 'Mint (M)',
        'seller': 'Plihan',
        'ships_from': 'Russian Federation',
        'price': '€1,400.00',
        'shipping': '\n        + shipping',
        'converted_price': 'about $1,521.74',
        'release_link': '/Can-Ege-Bamyasi/release/1292887',
        'id': '/sell/item/473419773'
      }
    ],
    'id': 1292887,
    'type': 'release',
    'thumbnail': 'https://img.discogs.com/wbWu1zhkJJXwSX3X712ImbRmRFA=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1292887-1207055912.jpeg.jpg'
  }
];

const samplegetWantlistSuggestedPrices = [ //eslint-disable-line
  {
    id: 4282482,
    'Very Good (VG)': { currency: 'USD', value: 218.6700767263427 },
    'Good Plus (G+)': { currency: 'USD', value: 121.48337595907928 },
    'Near Mint (NM or M-)': { currency: 'USD', value: 413.04347826086956 },
    'Good (G)': { currency: 'USD', value: 72.89002557544757 },
    'Very Good Plus (VG+)': { currency: 'USD', value: 315.85677749360616 },
    'Mint (M)': { currency: 'USD', value: 461.63682864450124 },
    'Fair (F)': { currency: 'USD', value: 48.593350383631716 },
    'Poor (P)': { currency: 'USD', value: 24.296675191815858 }
  },
  {
    id: 1292887,
    'Very Good (VG)': { currency: 'USD', value: 172.63427109974427 },
    'Good Plus (G+)': { currency: 'USD', value: 95.90792838874681 },
    'Near Mint (NM or M-)': { currency: 'USD', value: 326.0869565217391 },
    'Good (G)': { currency: 'USD', value: 57.54475703324808 },
    'Very Good Plus (VG+)': { currency: 'USD', value: 249.3606138107417 },
    'Mint (M)': { currency: 'USD', value: 364.4501278772379 },
    'Fair (F)': { currency: 'USD', value: 38.36317135549873 },
    'Poor (P)': { currency: 'USD', value: 19.181585677749364 }
  }
];

const sampleEnhancedScrape = { //eslint-disable-line
  pagination: { items: 3, hasNext: false, totalPages: 1 },
  listing: [
    { title: 'The Stooges - The Stooges (LP, Album, CP )',
      condition_sleeve: 'Very Good (VG)',
      condition_media: 'Very Good Plus (VG+)',
      seller: 'compwiz4u',
      ships_from: 'United States',
      price: '$299.00',
      shipping: '\n        + $5.00\n                \n                shipping',
      converted_price: '            $304.00 total',
      release_link: '/The-Stooges-The-Stooges/release/4282482',
      id: '/sell/item/782289920',
      item_only_price: 304,
      suggested_price: 315.85677749360616,
      amount_diff: -11.85677749360616,
      percent_diff: -0.037538461538461604 },
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
  id: '4282482',
  type: 'release',
  thumbnail: 'https://img.discogs.com/kmwujHzuyUhKgMFowrB6lQ_EHkY=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-4282482-1375913082-1796.jpeg.jpg'
};

const sampleWantListObject = { //eslint-disable-line
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
      'id': 6028905,
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
