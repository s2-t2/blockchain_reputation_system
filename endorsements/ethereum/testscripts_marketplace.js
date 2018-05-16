MarketPlace.deployed().then(function(instance){app=instance;})

app.sellProduct("product1","selling to buy something else",web3.toWei(3,"ether"),{from:web3.eth.accounts[1]})

//watch all product sold by any seller,
var sellProduct = app.LogSellProduct({ },{fromBlock:0, toBlock:'latest' } ).watch(function(error, event ){console.log(event); } )

//watch latest even triggered by the contract


//to stop watching the event
sellProduct.stopWatching()


market.sellProduct("product 1", "description 1", web3.toWei(10,"ether"), {from:web3.eth.accounts[1]} );
var buyEvent = app.LogBuyProduct({_seller:web3.eth.accounts[1]},{}).watch(function(error,event){console.log(event);})
market.buyProduct({from:web3.eth.accounts[2],value: web3.toWei(10,"ether")})

 web3.fromWei(web3.eth.getBalance(web3.eth.accounts[1]),"ether").toNumber()
