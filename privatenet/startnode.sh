geth --networkid 5538 --mine --minerthreads 2 --datadir "." --nodiscover --rpc --rpcport "8545" --port "30303" --rpccorsdomain "*" --nat "any" --rpcapi eth,web3,personal,net --unlock 0 --password ./password.sec --ipcpath "~/.ethereum/geth.ipc"

