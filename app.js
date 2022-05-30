//Set the variable metter V
//Set the variable feet V
//Set the variable initial number V
//Display initial number to result

let lengthResult = document.getElementById('length-result')
let volumeResult = document.getElementById('volume-result')
let massResult = document.getElementById('mass-result')
let inputEl = document.getElementById('input-el')
let btn = document.getElementById('btn')

let meter = 3.28084
let feet = 0.3048
let litre = 0.2641722
let gallon = 3.785411784
let kilo = 2.20462
let pound = 0.453592

btn.addEventListener('click', ()=> {
    let meterToFeet = inputEl.value * meter
    let feetToMetter = inputEl.value * feet
    lengthResult.innerText = inputEl.value + " meters = " +  meterToFeet.toFixed(3) + " feet ||" +" " + inputEl.value + " feet = " + feetToMetter.toFixed(3) + " meters" 

    let litreToGallon = inputEl.value * litre
    let gallonToLitre = inputEl.value * gallon
    volumeResult.innerText = inputEl.value + " litres = " +  litreToGallon.toFixed(3) + " gallons ||" +" " + inputEl.value + " gallons = " + gallonToLitre.toFixed(3) + " litres"
    
    let kiloToPound = inputEl.value * kilo
    let poundToKilo = inputEl.value * pound
    massResult.innerText = inputEl.value + " kilos = " +  kiloToPound.toFixed(3) + " pounds ||" +" " + inputEl.value + " pounds = " + poundToKilo.toFixed(3) + " kilos"

})
    

