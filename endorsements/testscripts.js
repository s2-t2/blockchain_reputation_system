
Endorsement.deployed().then(function(instance){app=instance;})

app.joinNetwork("Alice", {from: web3.eth.accounts[0] });
app.joinNetwork("Bob",{from: web3.eth.accounts[1]})
app.joinNetwork("Charlie",{from: web3.eth.accounts[2]})
app.joinNetwork("Dave",{from: web3.eth.accounts[3]})
app.joinNetwork("Eve",{from: web3.eth.accounts[4]})

app.participants(0).then(function(participant1){p1=participant1;})

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


