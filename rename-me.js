alert("SDI Project 3");

var car1 = { 
	make: "Pontiac", 
	model: "Grand Prix", 
	year: 1997 
	
};

var car2 = { 
	make: "Honda", 
	model: "Civic", 
	year: 2002
	
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