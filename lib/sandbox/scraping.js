const marketplace = require('./search');

const myFirstSearch = {
  id: '1292887',
  type: 'release'
};

marketplace.search(myFirstSearch, function(result){
  if(!(result instanceof Error))
    console.log(result);
});
