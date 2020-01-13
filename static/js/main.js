const addIngredient = document.querySelector('#add-ing');
const addLineIngredient = document.querySelector('#adding-ingredients');
const plusMethod = document.querySelector('#add-met')
const addMethod = document.querySelector('add-method')
const method = document.getElementsByName('method')

let amount = document.getElementsByName('amount').values();
let measurement = document.getElementsByName('measurement').values();
let ingredient = document.getElementsByName('ingredient').values();
let ingredients = [];
let methods = [];

$(document).ready(function () {
    $('select').formSelect();

});


function addIngLine() {

    ingredients.push(amount, measurement, ingredient);
    console.log(ingredients)
}

function addingMethod() {

    let inputMethod = document.getElementsByClassName('add-method').value;
    alert(inputMethod);
}

addIngredient.addEventListener('click', addIngLine);
plusMethod.addEventListener('click', addingMethod);