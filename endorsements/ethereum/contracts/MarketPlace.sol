pragma solidity ^0.4.18;

contract MarketPlace {
	
	struct Product { 
		uint id;
		address seller;
		address buyer;
		string name;
		string description;
		uint price;

		//feedback rating from 0 - 5 
		uint rating;
	}

	//store list of products accessible through uint key
	mapping(uint => Product) public products;
	uint productCounter;

	//events - informative message stored in each ethereum block transaction log
	//trigger events from contract to notify watchers that something just happened
	//associated to address of contract that triggered it

	event LogSellProduct(
		uint indexed _id,
		address indexed _seller, 
		string _name, 
		uint _price 
	);

	event LogBuyProduct(
		uint _productId,
		address indexed _seller,
		address indexed _buyer,
		string _name,
		uint _price
	);

	event LogFeedBack(
		address _buyer,
		uint _productId,
		uint rating
	);

	// sell product
	function sellProduct(string _name, string _description, uint _price) public { 

		productCounter++;

		//storing the product
		products[productCounter] = Product ( 
			productCounter,
			msg.sender,
			0x0,
			_name,
			_description,
			_price,
			0
		);
		
		LogSellProduct(productCounter, msg.sender, _name, _price);
	}

	//get number of products
	function getNumberOfProducts(  ) public view returns (uint ) { 
		return productCounter;
	}

	//get product that has not been sold yet
	function getProductsForSale( ) public view returns (uint [] ) {
		//productIds cannot have more identifiers than number we have in contract
		uint [] memory productIds = new uint[] (productCounter);

		uint numberOfProductsForSale = 0;

		for (uint i=1;i <= productCounter; i++ ) {  
			if(products[i].buyer == 0x0){
				productIds[numberOfProductsForSale]  = products[i].id;
				numberOfProductsForSale++;
			}
		}

		//copy productIds array into smaller for sale array
		uint[] memory forSale =  new uint[] (numberOfProductsForSale );

		for(uint j=1; j<= numberOfProductsForSale; j++ ) {  
			forSale[j] = productIds[j];
		}

		return forSale;
	}

	function buyProduct(uint _productId ) payable public { 
		//at least one product exists
		require(productCounter > 0  );

		require(_productId > 0 && _productId <= productCounter);

		//retrieve product from mapping
		Product storage product = products[_productId];

		require(product.buyer == 0x0);

		require(msg.sender != product.seller);
		require(msg.value == product.price);

		product.buyer = msg.sender;
		require(product.seller != 0x0);
		product.seller.transfer(msg.value);

		LogBuyProduct(_productId, product.seller, product.buyer, product.name, product.price );
	}

	function feedBack(uint _productId, uint _rating) public view {
		Product storage prod = products[_productId];

		require(msg.sender == prod.buyer);
		//require(_seller == product.seller);

		//update the value of rating for the product
		prod.rating = _rating;

		LogFeedBack(msg.sender, _productId, _rating );

	}
}


