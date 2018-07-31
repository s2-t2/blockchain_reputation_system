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
		//uint rating;
	}

	//store list of products accessible through uint key
	mapping(uint => Product) public products;
	uint productCounter;

	//ratings 
	mapping(address => uint) public ratings;

	//flags
	mapping(address => bool) public flag;
	mapping(address => uint) public flagCount;


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
			_price
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

	//leave rating for the seller as a buyer
	function leaveRating(uint _productId, uint _rating ) public {
		//only buyer can rate the product
		require(msg.sender == products[_productId].buyer);
		require(msg.sender != products[_productId].seller);
		require(_rating >= 0 && _rating <= 5);

		ratings[products[_productId].seller] = _rating;
	}

	function flagSeller(uint _productId ) public { 
		address seller = products[_productId].seller;
		address buyer = products[_productId].buyer;

		require(msg.sender == buyer );

		flag[seller] = true;
		flagCount[seller] == flagCount[seller]++;

		//if flagCount is more than 5, eliminate the seller
	}

}


