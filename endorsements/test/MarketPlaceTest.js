var MarketPlace = artifacts.require("./MarketPlace.sol");

//test suite
contract('MarketPlace', function(accounts )  {
	var marketPlaceInstance;

	var seller = accounts[1];
	var buyer = accounts[2];
	var productName1="product 1";
	var description1 = "description for product 1";
	var price1 = 10;
	
	var productName2 = "product2";
	var description2 = "description for product2";
	var price2 = 20;

	var sellerBalanceBeforeBuy, sellerBalanceAfterBuy;
	var buyerBalanceBeforeBuy, buyerBalanceAfterBuy;


	//test for initializing values 
	it("should be initialized with empty values", function() { 
		return MarketPlace.deployed().then(function(instance){
			marketPlaceInstance = instance;
			return marketPlaceInstance.getNumberOfProducts(); 
		}).then(function(data) { 
			//console.log("data[3]=", data[3]);
			assert.equal(data.toNumber(),0,"number of products should be 0" );
			return marketPlaceInstance.getProductsForSale();
		}).then(function(data){
			assert.equal(data.length, 0, "no products for sale" );
		
		} );
	} );

	//sell first product
	it("should let us sell first product", function() { 
		return MarketPlace.deployed().then(function(instance)  { 
			marketPlaceInstance = instance;
			return marketPlaceInstance.sellProduct(
				productName1, 
				description1, 
				web3.toWei(price1,"ether"),{from: seller }
			);
		}).then(function(receipt){
			//check event for log sell product
			assert.equal(receipt.logs.length, 1, "one event should be triggered" );
			assert.equal(receipt.logs[0].event, "LogSellProduct", "event should be LogSellProduct" );
			assert.equal(receipt.logs[0].args._id.toNumber(), 1, "id must be 1" );
			assert.equal(receipt.logs[0].args._seller, seller, "event seller must be " + seller );
			assert.equal(receipt.logs[0].args._name, productName1, "name must be " + productName1 );
			assert.equal(receipt.logs[0].args._price, web3.toWei(price1,"ether"), "price must be " + web3.toWei(price1,"ether" ) );

			return marketPlaceInstance.getNumberOfProducts();
		
		} ).then(function(data) { 
			assert.equal(data, 1, "number of product must be 1" );

			return marketPlaceInstance.getProductsForSale();
		
		} ).then(function(data){ 
			assert.equal(data.length, 1, "there must be one product for sale" );
			assert.eqaul(data[0].toNumber(), 1, "product id must be 1" );

			return marketPlaceInstance.products(data[0] )
		
		} ).then(function(data ) {
			assert.equal(data[0].toNumber(),1, "product id must be 1" );
			assert.equal(data[1],seller, "seller must be " + seller  );
			assert.equal(data[2], 0x0, "buyer must be empty" );
			assert.equal(data[3], productName1, "product name must be " + productName1 );
			assert.equal(data[4], description1, "description must be " + description1 );
			assert.equal(data[5].toNumber(), web3.toWei(price1,"ether"), "price must be " + web3.toWei(price1, "ether" ) );
		
		} ) ;
	});

	//test for watching event when new product is sold
//	it ("should trigger event when product is sold", function() { 
//		return MarketPlace.deployed().then(function(instance){ 
//			marketPlaceInstance = instance;
//			return marketPlaceInstance.sellProduct(productName, description, web3.toWei(price, "ether"), {from:seller } ).then(function(receipt) {
//				assert.equal(receipt.logs.length, 1, "one event should be triggered" );
//				assert.equal(receipt.logs[0].event, "LogSellProduct", "event should be LogSellProduct" );
//				assert.equal(receipt.logs[0].args._seller, seller, "event seller must be " + seller );
//
//				assert.equal(receipt.logs[0].args._name, productName, "name must be " + productName );
//
//				assert.equal(receipt.logs[0].args._price, web3.toWei(price,"ether"), "price must be " + web3.toWei(price,"ether" ) );
//				
//			} )
//		} )
//	} )
});
