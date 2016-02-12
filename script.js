var temperature = prompt("Enter a temperature");
var temperature_unit = prompt("Enter F for Fahrenheit, C for Celsius, or K for Kelvin");
var fahrenheitTemps = [];
var celsiusTemps = [];
var kelvinTemps = [];

function cToF(c)
{
  return c * 9/5 + 32;
};

function cToK(c)
{
  return c + 273.15;
};

function fToC(f)
{
  return (f - 32) * 5/9;
};

function fToK(f)
{
  return (f + 459.67) * 5/9;
};

function kToC(k)
{
  return k - 273.15;
};

function kToF(k)
{
  return k * 9/5 - 459.67;
};

if(temperature_unit == "C")
{
  celsiusTemps.push(temperature);
  celsiusTemps.push(cToF(temperature));
  celsiusTemps.push(cToK(temperature));
  console.log(celsiusTemps);
}
else if(temperature_unit == "F")
{
  fahrenheitTemps.push(temperature);
  fahrenheitTemps.push(fToC(temperature));
  fahrenheitTemps.push(fToK(temperature));
  console.log(fahrenheitTemps);
}
else if(temperature_unit == "K")
{
  kelvinTemps.push(temperature);
  kelvinTemps.push(kToC(temperature));
  kelvinTemps.push(kToF(temperature));
  console.log(kelvinTemps);
}
else
{
  console.log("That's not a temperature unit");
}
