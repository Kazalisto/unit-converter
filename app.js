//Set the variable metter V
//Set the variable feet V
//Set the variable initial number V
//Display initial number to result

let initialNumber = document.getElementById('initial-number').innerText = 20
let lengthResult = document.getElementById('length-result')
let volumeResult = document.getElementById('volume-result')
let massResult = document.getElementById('mass-result')

let meter = 3.28084
let feet = 0.3048
let litre = 0.2641722
let gallon = 3.785411784
let kilo = 2.20462
let pound = 0.453592

function meterAndFeet(){
    let metterToFeet = 1 * meter
    let feetToMetter = 1 * feet

    let resToFeet = initialNumber * meter
    let resToMeter = initialNumber * feet
    
    
    lengthResult.innerText = initialNumber + " meters = " + resToFeet.toFixed(3) + " feet" + " |" +
            initialNumber + " feet = " + resToMeter.toFixed(3) + " meters" 
    
}

function literAndGallon(){
    let litreToGallon = 1 * litre
    let gallonToLitre = 1 * gallon

    let resToGallon = initialNumber * litreToGallon
    let resToLitre = initialNumber * gallonToLitre
    
  
    
    volumeResult.innerText = initialNumber + " litres = " + resToGallon.toFixed(3) + " gallons " + " |" +
            initialNumber + " gallons = " + resToLitre.toFixed(3) + " litres"
    
}


function massAndKilo(){
    let kiloToPound = 1 * kilo
    let poundToKilo = 1 * pound

    let resToPound = initialNumber * kiloToPound
    let resToKilo = initialNumber * poundToKilo
    
    
    
    
    massResult.innerText = initialNumber + " kilos = " + resToPound.toFixed(3) + " pounds " + " | " + 
            initialNumber + " pounds = " + resToKilo.toFixed(3) + " kilos"
    
}


meterAndFeet()
literAndGallon()
massAndKilo()