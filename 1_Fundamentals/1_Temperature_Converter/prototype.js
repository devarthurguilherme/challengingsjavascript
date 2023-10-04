const celsius = 10;
const fahrenheit = 86;

function CelsiusToFahrenheit(c) {
    const result = (c * 9 / 5) + 32;

    return result;
};

function FahrenheitToCelsius(f) {
    const result = ((f - 32) * 5) / 9

    return result;
};

console.log(CelsiusToFahrenheit(celsius));
console.log(FahrenheitToCelsius(fahrenheit));

//Catch values input
//Print output
//Active btns
//Reset