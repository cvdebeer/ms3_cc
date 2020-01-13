const addIngredient = document.querySelector('#add-ing');
const plusMethod = document.querySelector('#add-met')
const addLineIngredient = document.querySelector('#adding-ingredients');
const addMethod = document.querySelector('#add-method')
const pic = document.querySelector('#fileInput');
const picUpload = document.querySelector('#pic-upload');


let ingredients = [];
let methods = [];

$(document).ready(function () {
    $('select').formSelect();

});

function addIngLine() {
    let amount = document.getElementById('amount').value;
    let measurement = document.getElementById('measurement').value;
    let ingredient = document.getElementById('ingredient').value;
    ingredients.push(amount, measurement, ingredient);
    addLineIngredient.insertAdjacentHTML('beforebegin',
        `<ul><li><i class="material-icons left">donut_small</i>${amount} ${measurement} ${ingredient}</li></ul>`);
}

function addingMethod() {
    let inputMethod = document.getElementById('method').value;
    methods.push(inputMethod)
    addMethod.insertAdjacentHTML('beforebegin',
        `<ul><li><i class="material-icons left">donut_small</i>${inputMethod}</li></ul>`);
}

function imageUpload() {
    pic.click();
}

addIngredient.addEventListener('click', addIngLine);
plusMethod.addEventListener('click', addingMethod);
picUpload.addEventListener('click', imageUpload);