
Endorsement.deployed().then(function(instance){app=instance;})

app.sendEndorsement(web3.eth.accounts[1],"One",{from: web3.eth.accounts[4]})

app.sendEndorsement(web3.eth.accounts[1],"One",{from: web3.eth.accounts[6]})

app.sendEndorsement(web3.eth.accounts[1],"One",{from: web3.eth.accounts[2]})

app.sendEndorsement(web3.eth.accounts[2],"Two",{from: web3.eth.accounts[1]})

app.sendEndorsement(web3.eth.accounts[3],"Three",{from: web3.eth.accounts[1]})

app.sendEndorsement(web3.eth.accounts[5],"Three",{from: web3.eth.accounts[4]})

