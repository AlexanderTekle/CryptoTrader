var bittrex = require('node-bittrex-api');
bittrex.options({
  'apikey' : API_KEY,
  'apisecret' : API_SECRET,
});
bittrex.getmarketsummaries( function( data, err ) {
  if (err) {
    return console.error(err);
  }
  for( var i in data.result ) {
    bittrex.getticker( { market : data.result[i].MarketName }, function( ticker ) {
      console.log( ticker );
    });
  }
});
