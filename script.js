function convertTemperature() {
  let temperature = parseFloat(document.getElementById("temperature").value);
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  let result;

  if (isNaN(temperature)) {
    document.getElementById("output").innerText = "⚠️ Please enter a valid number!";
    return;
  }

  // Conversion logic
  if (from === to) {
    result = temperature;
  } else if (from === "celsius" && to === "fahrenheit") {
    result = (temperature * 9/5) + 32;
  } else if (from === "celsius" && to === "kelvin") {
    result = temperature + 273.15;
  } else if (from === "fahrenheit" && to === "celsius") {
    result = (temperature - 32) * 5/9;
  } else if (from === "fahrenheit" && to === "kelvin") {
    result = (temperature - 32) * 5/9 + 273.15;
  } else if (from === "kelvin" && to === "celsius") {
    result = temperature - 273.15;
  } else if (from === "kelvin" && to === "fahrenheit") {
    result = (temperature - 273.15) * 9/5 + 32;
  }

  document.getElementById("output").innerText = 
    `✅ ${temperature} ${from.toUpperCase()} = ${result.toFixed(2)} ${to.toUpperCase()}`;
}
