// SDI Week 4
// Jonell Colon
// Term: 1203
// Project 4 

alert("SDI Project 4, Week 4");

var jonellLib = function () {}

// E-Mail Validation
// http://www.authorcode.com/how-to-validate-email-address-in-javascript/

var emailValidation = function (emailValidate) { 
	var reg = /[a-zA-Z0-9-._+]+@[a-zA-Z0-9-]+.[a-zA-Z]+/;  
    var validated = reg.test(emailValidate);  
    if (!validated) {  
        console.log("Email Address isn't  valid");  
	} else { 
        console.log("Email Address  is  valid");  
	} 
};

// Phone Number Validation
// http://www.zparacha.com/phone_number_regex/#.T2f9RXjVlAc

var phoneValidation = function (validatePhoneNumber){  
	var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;  
	var validated = phoneNumberPattern.test(validatePhoneNumber);
	if (!validated) {  
        console.log("Phone Number is not  valid");  
	} else { 
        console.log("Phone Number is  valid");  
	} 
};

// Title Case a string
// http://forrst.com/posts/Title_Case_Function_for_JavaScript_Strings-iJG

String.prototype.titleCase = function() {
  	var 
    words = this.split(/\s+/),
    word,
    stop = /^((of)|(the)|a|(an)|(in)|(to)|(and)|(or))$/i;

  for (var idx = 0; idx < words.length; ++idx) {
    word = words[idx]

    words[idx] = stop.test(word) && idx != 0 && idx < words.length ?
      word.toLowerCase() :
      word.substring(0, 1).toUpperCase() + 
        word.substring(1, word.length).toLowerCase();
  }

  return words.join(" ");
}
// call string with "full sail is awesome".titleCase();


// URL Validation (HTTP or HTTPS)
// http://stackoverflow.com/questions/8505349/validation-of-url-without-www-in-javascript

var urlValidation = "URL..."; 
var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
	if (regexp.test(urlValidation)) {
    	console.log("URL is a match");
} else {
    	console.log("URL does not match");
}












return {
	"emailValidation" : emailValidation,
	"phoneValidation" : phoneValidation,
	"titleCase" : titleCase,
	"urlValidation" : urlValidation,
	