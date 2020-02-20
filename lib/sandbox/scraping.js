const marketplace = require('./search');

const myFirstSearch = {
  id: 'Black Sabbath',
  type: 'string'
};

marketplace.search(myFirstSearch, function(result){
  if(!(result instanceof Error))
    console.log(result);
});
