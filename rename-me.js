// Got To Buy a Car

var carCustomer = "My";
	gotToBuyACar = true;
	moneyToBuyCar = 2000;
	doIHaveMoney = true;
	carsILikeInLot = "Hondas, Toyota, Mazda";
	peopleFitInCar = 5;
	howManyBrandsToChooseFrom = 10;
	chooseFromCars = "Hondas, Toyotas, Mazdas, Buicks, Pontiacs, Fords";
	carDealers = 3;
	newCar = 4000;
	
	console.log("Ok, my car broke down, great now I have to buy a new one.");
	
if (gotToBuyACar === true) {
		console.log("It\'s time to begin a car search then.");
	
	} else {
		console.log("Darn, am gonna have to take the bus.");
	};
	
	
if (doIHaveMoney === true) {
		console.log("I got " + moneyToBuyCar + " dollars" + " so let\'s continue our search.");
	
	} else {
		console.log("I got to save up money before I even look.");
	};
	
	// Number Variables
	console.log("Maybe a new car?");
	
if (newCar > moneyToBuyCar) {
		console.log("Nah, gonna have to get a used car.");
		
	} else { 
		console.log("Yes, am gonna be pimpin\'");
	};
	
	// Object + JSON
if (gotToBuyACar === true) {
		console.log("Ok, here is a list with information.")
	} else { 
		console.log("Keep saving money.")
	};
	
var handleData = function (json) {
		for (var i = 0; i < json.cars.length; i++){
		var car = json.cars[i];
		console.log("VIN Number: " + car.uuid + ", Maker: " + car.maker + ", Model: " + car.model + ", Year: " + car.year + ", Cost: " + car.cost);
	};
};

handleData(json2);

	// Variable Function
	function cars (p, h, t) {
		console.log("The " + p + " costs less than " + h + " but only 200 dollars less than " + t);
	}

	cars("Pontiac", "Honda", "Toyota")

/*
var jsonstring = JSON.stringify(json);
	console.log(jsonstring);

var receivedjson = JSON.parse(jsonstring);
console.log(receivedjson);
*/
