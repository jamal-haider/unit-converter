/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meterToFeets = 3.281
const literToGalons = 0.264
const kiloToPounds = 2.204


const convertBtn = document.getElementById("convert-btn")
let resultLength = document.getElementById("result-length")
let resultVolume = document.getElementById("result-volume")
let resultMass = document.getElementById("result-mass")

convertBtn.addEventListener("click", function(){
    let input = document.getElementById("input-el")
    input = Number(input.value)
    if(input){
        const feets = input*meterToFeets
        const meters = input/meterToFeets
        resultLength.textContent = `${input} meters = ${feets.toFixed(3)} feet | ${input} feet = ${meters.toFixed(3)} meters`
        
        const liters = input*literToGalons
        const galons = input/literToGalons
        resultVolume.textContent = `${input} liters = ${liters.toFixed(3)} gallons | ${input} gallons = ${galons.toFixed(3)} liters`
        
        const kilo = input*kiloToPounds
        const pound = input/kiloToPounds
        resultMass.textContent = `${input} kilos = ${kilo.toFixed(3)} pounds | ${input} pounds = ${pound.toFixed(3)} kilos`    
    }
    
})

