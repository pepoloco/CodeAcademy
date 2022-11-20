//degrees in Kelvin
const kelvin = 293;
// Celsius is 273 degrees less  than Kelvin
let celsius = kelvin - 273;
//calculating fahrenheight
let fahrenheit = celsius * (9 / 5) + 32;
//rounding to do down number;
Math.floor(fahrenheit);
//printing the temperature
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
