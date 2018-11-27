var BMI= function(weight,height){
  return weight/(height*height);
}

var weight= parseInt(prompt("Enter weight in kgs:"));
var height= parseInt(prompt("Enter height in meters:"));
var results= BMI(weight, height);
alert (results.toFixed(4));
