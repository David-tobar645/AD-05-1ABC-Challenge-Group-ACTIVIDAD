
function convertTemperature() {
    let celsius = prompt("Ingrese la temperatura en grados Celsius: ");
    
    
    while (isNaN(celsius)) {
        celsius = prompt("Error. Por favor ingrese la temperatura en grados Celsius como un número: ");
    }

    celsius = parseFloat(celsius);
    let fahrenheit = (celsius * 9/5) + 32;
    let kelvin = celsius + 273.15;
    
    console.log(`La temperatura en grados Farenheit es: ${fahrenheit.toFixed(2)}`);
    console.log(`La temperatura en grados Kelvin es: ${kelvin.toFixed(2)}`);
}

convertTemperature();