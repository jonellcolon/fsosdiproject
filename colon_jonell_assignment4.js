// SDI Week 4
// Jonell Colon
// Term: 1203
// Project 4 

alert("SDI Project 4, Week 4");

var jonellLib = function (){

// E-Mail Validation
// http://www.authorcode.com/how-to-validate-email-address-in-javascript/

var emailValidation = function (emailValidate) { 
					/* Regex means that address must begin with alpha numeric numbers 
					and contain ".", "-". After initial it must have an "@" symbol.
					As the beginning it must contain alpha numeric after the "@" and
					a "." after second character and end in lower or upper alphabets.*/
	var regexp = /[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+.[a-zA-Z]+/;  
    var validated = regexp.test(emailValidate);  
    if (!validated) {  
        console.log("Email Address is not valid");  
	} else { 
        console.log("Email Address is valid");  
	} 
};

// Phone Number Validation
// http://www.zparacha.com/phone_number_regex/#.T2f9RXjVlAc

var phoneValidation = function (validatePhoneNumber) {  
					/* The regex means that number may start with an optional "(" then followed 
					by 3 numbers then an optional ")" or "-" followed by 3 more numbers, 
					another optional "-" and end with 4 numbers. */
	var regexp = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;  
	var validated = regexp.test(validatePhoneNumber);
	if (!validated) {  
        console.log("Phone Number is not valid");  
	} else { 
        console.log("Phone Number is valid");  
	} 
};

// Title Case a string
// http://lawrence.ecorp.net/inet/samples/regexp-format.php

var titleCase = function (title) {
							/* The regexp is saying to find a match at the beginning/end 
							of a word with the "\b" metacharacter and then with the 
							expressions "[a-z]" to find all lower case characters 
							from a to z and replace all first characters of each 
							string toUpperCase.*/
        return title.toLowerCase().replace(/\b[a-z]/g, cnvrt);
        function cnvrt() {
            return arguments[0].toUpperCase();
        }
};


// URL Validation (HTTP or HTTPS)
// http://msdn.microsoft.com/en-us/library/ff650303.aspx

var urlValidation = function (url) {
							/* The regexp is giving us the option of looking for validation of a url
							"ftp, http or https". Also looks for url starting with numbers,
							 lower case and upper case words. Continue to look for "." and then
							 seeks numbers, lower case and upper case words finish the validation
							 after seeing the "." and checking once more for numbers, lower case 
							 and upper case words. */
	var regexp = /^(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?$/;
	if (regexp.test(url)) {
    	console.log("URL is correct");
} else {
    	console.log("URL is not correct");

};

// Format number to specific number of decimal spaces, as for money
// http://www.mredkj.com/javascript/nfbasic2.html

var value = 23;
	var amount = value.toFixed(2); // Will give 2 decimal points because specified "(2)".
	console.log(amount);


// Total value of just numbers in an Array

var totalArray = ['jonell',31,'Rose',29,'Adassa',3,'Eli',5];
	var total = 0;
	for (var i=0; i < totalArray.length; i++) {
  	if (!isNaN(parseInt(totalArray[i]))) { total += totalArray[i]; }
}
	console.log(total);

};

return {

	"emailValidation" : emailValidation,
	"phoneValidation" : phoneValidation,
	"titleCase" : titleCase,
	"urlValidation" : urlValidation,
	"value" : value,
	"totalArray" : totalArray
	
	};
};

var lib = jonellLib();

var emailValidate = ["jonellcolon@fullsail.edu"];
var validatePhoneNumber = [407-437-7526];
var title = ["scalable data infrastructure"];
var url = ["http://www.fullsail.edu"];
var value = [];
var totalArray = [];

/*console.log(lib.emailValidation("jonellcolon@fullsail.edu"));
console.log(lib.phoneValidation("(407) 437-7526"));
console.log(lib.titleCase("scalable data infrastructure"));
console.log(lib.urlValidation("http://www.fullsail.edu"));
// console.log(lib.value());
// console.log(lib.totalArray());
*/

lib.emailValidation("jonellcolon@fullsail.edu");
lib.phoneValidation("(407) 437-7526");
console.log(lib.titleCase("scalable data infrastructure"));
lib.urlValidation("http://www.fullsail.edu");
