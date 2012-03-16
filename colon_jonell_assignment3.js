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
	carWorksFine = true;
	
	console.log("Ok, my car broke down, great now I have to buy a new one.");

// Nested Conditionals
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
	
	
	console.log("Maybe a new car?");
	
if (newCar > moneyToBuyCar) {
		console.log("Nah, gonna have to get a used car.");
		
	} else { 
		console.log("Yes, am gonna be pimpin\'");
	}
	
	console.log("Going to my first car dealer and...")
	
// For Loop 
for (var countdown = 2; countdown < 10; countdown+=1) {
	console.log("Wow, " + countdown + " cars have rolled out since we got here.");
};

	console.log("The car\'s here must be real cheap.");
	
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


function cars (p, h, t) {
	console.log("The " + p + " costs less than " + h + " but only 200 dollars less than " + t);
	}

	cars("Pontiac", "Honda", "Toyota")
	
// While Loop	
var salesPersons = 5;
	while (salesPersons > 0) {
	console.log(salesPersons + " Sales people on the floor, excuse me sir can you help me? Did he ignore me?");
	salesPersons--;
};

console.log("Fine i'll take my business some where else");

console.log("Found ad in CraigsList so I go see the car.");

// Return Values
var enoughMoney = function(haveCash) {
	var pricePerPontiac = 2000,
		oneCar;
	if (haveCash < pricePerPontiac) {
		console.log("Just enough money.");
		oneCar = 0;
	}
	else {
	oneCar =  Math.floor(haveCash / pricePerPontiac);
	
	}
	return oneCar;
};

var gotACar = enoughMoney(2000);
console.log("Cool, "+ gotACar + " car for me to buy.");

// Nested Conditional
var carPrice = 2000;
var worksFine = true;

if (moneyToBuyCar === 2000) {
	if (carWorksFine === true) {
	
	console.log("Then pay the man his money for the car and drive away.");
	
	} else {
	
	console.log("Keep looking around.");
	}
}



/*
var jsonstring = JSON.stringify(json);
	console.log(jsonstring);

var receivedjson = JSON.parse(jsonstring);
console.log(receivedjson);
*/
