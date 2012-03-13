var me = "I",
	buy = true,
	money = "$2,000",
	lookAtVehicles = "Car Model"
	
if (buy === true) {
	console.log("I am looking into cars to buy.")
} else { 
	console.log("Keep saving money.")
};

/*alert("SDI Project 3");

var car1 = { 
	make: "Pontiac", 
	model: "Grand Prix", 
	year: 1997,
	looks:"Used"
	
};

var car2 = { 
	make: "Honda", 
	model: "Civic", 
	year: 2002,
	looks: "New"
	
};

function carDetails() {
	// display car details here
	console.log(this.make + " is a " + this.model + " from " + this.year);

}

car1.logDetails = carDetails;
car2.logDetails = carDetails;


car1.logDetails();
car2.logDetails();

for (var specs in car1) {
	console.log("specs: " + specs + ", info: ", car1[specs]);
	
};

for (var specs in car2) {
	console.log("specs: " + specs + ", info: ", car2[specs]);
	
};
*/

var handleData = function (json) {
	for (var i = 0; i < json.cars.length; i++){
		var car = json.cars[i];
		console.log("Car ID: " + car.uuid + ", Maker: " + car.maker + ", Model: " + car.model + ", Year: " + car.year);
	};
};

handleData(json2);

/*
var jsonstring = JSON.stringify(json);
	console.log(jsonstring);

var receivedjson = JSON.parse(jsonstring);
console.log(receivedjson);
*/
