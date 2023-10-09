let Celsius = document.getElementById("celsius");
let Fahrenheit = document.getElementById("fahrenheit");
let Kelvin = document.getElementById("kelvin");

Celsius.oninput = function() {
  let tranFah = (parseFloat((Celsius.value / 5) * 9) + 32);
  Fahrenheit.value = parseFloat(tranFah.toFixed(2));

  let tranKel = (parseFloat(Celsius.value) + 273.15);
  Kelvin.value = parseFloat(tranKel.toFixed(2));
}

Fahrenheit.oninput = function() {
  let tranCel = (parseFloat((Fahrenheit.value - 32) / 9) * 5);
  Celsius.value = parseFloat(tranCel.toFixed(2));

  let tranKel = (parseFloat(((Fahrenheit.value - 32) / 9) * 5) + 273.15);
  Kelvin.value = parseFloat(tranKel.toFixed(2));
}

Kelvin.oninput = function() {
  let tranCel = (parseFloat((Kelvin.value) - 273.15));
  Celsius.value = parseFloat(tranCel.toFixed(2));

  let tranFah = (parseFloat(((Kelvin.value - 273.15) / 5) * 9) + 32);
  Fahrenheit.value = parseFloat(tranFah.toFixed(2));
}