
Endorsement.deployed().then(function(instance){app=instance;})

//join
app.joinNetwork("Alice", {from: web3.eth.accounts[0] });
app.joinNetwork("Bob",{from: web3.eth.accounts[1]})
app.joinNetwork("Charlie",{from: web3.eth.accounts[2]})
app.joinNetwork("Dave",{from: web3.eth.accounts[3]})
app.joinNetwork("Eve",{from: web3.eth.accounts[4]})

app.participants(0).then(function(participant1){p1=participant1;})

//Endorse
app.endorse(1,{from: web3.eth.accounts[0]})
app.endorse(2,{from: web3.eth.accounts[0]})
app.endorse(0,{from: web3.eth.accounts[1]})
app.endorse(0,{from: web3.eth.accounts[3]})
app.endorse(3,{from: web3.eth.accounts[4]})
app.endorse(3,{from: web3.eth.accounts[1]})



app.sendEndorsement(web3.eth.accounts[2],"One",{from: web3.eth.accounts[1]})

app.sendEndorsement(web3.eth.accounts[3],"One",{from: web3.eth.accounts[1]})

app.sendEndorsement(web3.eth.accounts[1],"One",{from: web3.eth.accounts[2]})

app.sendEndorsement(web3.eth.accounts[1],"One",{from: web3.eth.accounts[4]})

app.sendEndorsement(web3.eth.accounts[1],"One",{from: web3.eth.accounts[6]})

app.sendEndorsement(web3.eth.accounts[1],"One",{from: web3.eth.accounts[2]})

app.sendEndorsement(web3.eth.accounts[2],"Two",{from: web3.eth.accounts[1]})

app.sendEndorsement(web3.eth.accounts[3],"Three",{from: web3.eth.accounts[1]})

app.sendEndorsement(web3.eth.accounts[5],"Three",{from: web3.eth.accounts[4]})


################MarketPlace#######################3
MarketPlace.deployed().then(function(instance){mp=instance;})

//Events
var sellEvent = mp.LogSellProduct({},{}).watch(function(error,event){console.log(event);}); 
var buyEvent = mp.LogBuyProduct({},{}).watch(function(error,event){console.log(event);});

//Sell 
mp.sellProduct("product 1", "desc for product 1", web3.toWei(1,"ether"),{from:web3.eth.accounts[1]})
mp.sellProduct("product 2", "desc for product 2", web3.toWei(2,"ether"),{from:web3.eth.accounts[2]})
mp.sellProduct("product 3", "desc for product 3", web3.toWei(3,"ether"),{from:web3.eth.accounts[3]})

//Buy 
mp.buyProduct(1,{from: web3.eth.accounts[0], value: web3.toWei(1,"ether")})
mp.buyProduct(2,{from: web3.eth.accounts[1], value: web3.toWei(2,"ether")})
mp.buyProduct(3,{from: web3.eth.accounts[2], value: web3.toWei(3,"ether")})

//getNumberOfProducts
mp.getNumberOfProducts()

//flag
mp.flag(web3.eth.accounts[1])
mp.flagCount(web3.eth.accounts[1])




