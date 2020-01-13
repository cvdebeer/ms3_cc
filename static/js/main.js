const addIngredient = document.querySelector('#add-ing');
const plusMethod = document.querySelector('#add-met')
const addLineIngredient = document.querySelector('#adding-ingredients');
const addMethod = document.querySelector('#add-method')
const pic = document.querySelector('#fileInput');
const picUpload = document.querySelector('#pic-upload');
const review = document.querySelector('#review_recipe');
const info = document.querySelector('#recipe-info');

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

function reviewRecipe() {
    let name = document.getElementById('recipe_name').value;
    let serve = document.getElementById('servings').value;
    let prep = document.getElementById('prep_time').value;
    let cook = document.getElementById('cook_time').value;
    let rate = document.getElementById('rating').value;
    let carb = document.getElementById('carbs').value;
    let fats = document.getElementById('fat').value;
    let pro = document.getElementById('protein').value;

    document.getElementById('display-r-n').innerHTML = name;
    document.getElementById('display-serv').innerHTML = serve;
    document.getElementById('display-prep').innerHTML = prep;
    document.getElementById('display-cook').innerHTML = cook;
    document.getElementById('display-carb').innerHTML = carb;
    document.getElementById('display-fat').innerHTML = fats;
    document.getElementById('display-pro').innerHTML = pro;
    document.getElementById('display-rating').innerHTML = rate;
    console.log(name);
}


addIngredient.addEventListener('click', addIngLine);
plusMethod.addEventListener('click', addingMethod);
picUpload.addEventListener('click', imageUpload);
review.addEventListener('click', reviewRecipe);