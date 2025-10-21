/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById('convert-btn')
const answerLength = document.getElementById('ans-length')
const answerVolume = document.getElementById('ans-volume')
const answerMass = document.getElementById('ans-mass')
const inputText = document.getElementById('input-text')
let results = []

convertBtn.addEventListener('click', function () {
    // console.log(inputText.value)
    let n = inputText.value
    let length = convertLength(n)
    let volume = convertVolume(n)
    let mass = convertMass(n)
    
    answerLength.innerHTML = `<span class="head-text">Length (Meter/Feet)</span><br>${n} meters = ${length.imp} feet | ${n} feet = ${length.met} meters`
    
    answerVolume.innerHTML =  `<span class="head-text">Volume (Liters/Gallons)</span><br>${n} liters = ${volume.imp} gallons | ${n} gallons = ${volume.met} liters`
    
    answerMass.innerHTML = `<span class="head-text">Mass (Kilograms/Pounds)</span><br>${n} kilos = ${mass.imp} pounds | ${n} pounds = ${mass.met} kilos`
    
    results = {length,volume,mass}
    
})


async function copyResult(key){
    let textToCopy = ` ${results[key].imp} feet or ${results[key].met} meters`

    
    // try {
    //     await navigator.clipboard.writeText(textToCopy)
        alert(key + ' copied to clipboard!')
        console.log(textToCopy)
    // } catch (err) {
    //     console.error('Failed to copy text: ', err);
    //     alert('Could not copy password. This might be due to browser permissions.');
    
    // }
    }



function convertLength (n) {
    const feet = Number(3.281*n).toFixed(3)
    const meter = Number(n/3.281).toFixed(3)
    const converted = {imp: feet, 
    met: meter}
    console.log (converted)
    return converted
}

function convertVolume (n) {
    // let gallon = n*0.264
    
    const gallon = Number(n*0.264).toFixed(3)
    const liter = Number(n/0.264).toFixed(3)
    const converted = {imp: gallon, 
    met: liter}
    console.log (converted)
    
    return converted
}

function convertMass (n) {
    // let pound = 2.204*n
    
    const pound = Number(n*2.204).toFixed(3)
    const kilogram = Number(n/2.204).toFixed(3)
    const converted = {imp: pound, 
    met: kilogram}
    console.log (converted)
    
    return converted
}

