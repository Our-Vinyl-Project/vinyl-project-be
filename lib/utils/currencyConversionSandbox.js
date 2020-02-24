const marketplace = require('../scraper/search');

var search_parameters = {
  id: '4282482',
  type: 'release',
  pagination : {
    page: 1
  }
};

marketplace.search(search_parameters, function(result){
  if(!(result instanceof Error))
    console.log(result);//eslint-disable-line
});
