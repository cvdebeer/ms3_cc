const reviewRecBtn = document.querySelectorAll('.review');
const reviewRec = document.querySelector('#edit_review');
const editInfo = document.querySelector('#edit_recipe');
const editIngBtn = document.querySelector('#edit-ing-btn');
const addIngredient = document.querySelector('#add-ing');
const editRecIng = document.querySelector('#edit_ingredients');
const editMetBtn = document.querySelector('#edit-met-btn');
const editRecMet = document.querySelector('#edit_method');
const editInfoBtn = document.querySelector('#edit-info-btn');
const editImgBtn = document.querySelector('#edit-img-btn');
const plusMethod = document.querySelector('#add-met');
const newImage = document.querySelector('#new-image');
const submitBtn = document.querySelector('#submitBtn');



let pic = document.querySelector('#fileInput');
let addMethod = document.querySelector('#adding-method');
let displayMet = document.getElementById('display-method');
let displayIng = document.getElementById('display-ing');
let addLineIngredient = document.querySelector('#editing-ingredients');
let methods = [];
let screenMet = [];
let dataToSend = {};
let ingredients = []
let screenIng = [];

getPyIng();
getPyMet();

function moveToEditIng() {
    editRecIng.setAttribute('class', 'visible');
    reviewRec.setAttribute('class', 'hidden');
    editInfo.setAttribute('class', 'hidden');
    editRecMet.setAttribute('class', 'hidden');
    displayIng.innerHTML = '';
    return ingredients = [];
}

function moveToEditMet() {
    editRecMet.setAttribute('class', 'visible');
    reviewRec.setAttribute('class', 'hidden');
    editRecIng.setAttribute('class', 'hidden');
    editInfo.setAttribute('class', 'hidden');
    displayMet.innerHTML = '';
    return methods = [];
}

function moveToEditInfo() {
    editInfo.setAttribute('class', 'visible');
    reviewRec.setAttribute('class', 'hidden');
    editRecIng.setAttribute('class', 'hidden');
    editRecMet.setAttribute('class', 'hidden');
}

function moveToEditImg() {
    editInfo.setAttribute('class', 'hidden');
    reviewRec.setAttribute('class', 'hidden');
    editRecIng.setAttribute('class', 'hidden');
    editRecMet.setAttribute('class', 'hidden');
}


function updateRecipeInfo() {
    let name = document.getElementById('recipe_name').value;
    let author = document.getElementById('author_name').value;
    let weblink = document.getElementById('weblink').value;
    let serve = document.getElementById('servings').value;
    let prep = document.getElementById('prep_time').value;
    let cook = document.getElementById('cook_time').value;
    result = Number(prep) + Number(cook);
    let rate = document.getElementById('rating').value;
    let carb = document.getElementById('carbs').value;
    let fats = document.getElementById('fat').value;
    let pro = document.getElementById('protein').value;


    document.getElementById('display-r-n').innerHTML = name;
    document.getElementById('display-serve').innerHTML = serve;
    document.getElementById('display-prep').innerHTML = prep;
    document.getElementById('display-cook').innerHTML = cook;
    document.getElementById('display-total').innerHTML = result;
    document.getElementById('display-carb').innerHTML = carb;
    document.getElementById('display-fat').innerHTML = fats;
    document.getElementById('display-pro').innerHTML = pro;
    document.getElementById('display-rating').innerHTML = rate;
    document.getElementById('display-auth').innerHTML = author;
    document.getElementById('display-weblink').innerHTML = weblink;

}

function imageUpload() {
    pic.click();
    /*Code for previewing images found https://stackoverflow.com/questions/31710127/javascript-image-upload-and-display */
    let fileTag = document.getElementById("fileInput"),
        preview = document.getElementById("edit_preview");
    // display_image = document.getElementById('display-img');

    fileTag.addEventListener("change", function () {
        changeImage(this);
    });

    function changeImage(input) {
        let reader;

        if (input.files && input.files[0]) {
            reader = new FileReader();

            reader.onload = function (e) {
                preview.setAttribute('src', e.target.result);
                // display_image.setAttribute('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
};

function addIngLine() {
    let amount = document.getElementById('amount').value;
    let measurement = document.getElementById('measurement').value;
    let ingredient = document.getElementById('ingredient').value;
    dataToSend = {
        'amount': amount,
        'measurement': measurement,
        'ingredient': ingredient
    }
    ingredients.push(dataToSend);
    screenIng.push([amount, measurement, ingredient]);

    addLineIngredient.insertAdjacentHTML('beforeend',
        `<li>${amount} ${measurement} ${ingredient}</li>`);

    for (let i = 0; i < screenIng.length; i++) {
        displayIng.insertAdjacentHTML("beforeend",
            `<li>${screenIng[i].join(' ')}</li>`)
    };
}

function addingMethod() {
    displayMet.innerHTML = '';
    let inputMethod = document.getElementById('method').value;
    methods.push(inputMethod);
    screenMet.push(inputMethod);

    addMethod.insertAdjacentHTML('beforeend',
        `<li>${inputMethod}</li>`);

    for (let m = 0; m < screenMet.length; m++) {
        displayMet.insertAdjacentHTML('beforeend',
            `<li>${screenMet[m]}</li>`)
    };

}

function recRev() {
    updateRecipeInfo()
    reviewRec.setAttribute('class', 'visible')
    editInfo.setAttribute('class', 'hidden');
    editRecIng.setAttribute('class', 'hidden');
    editRecMet.setAttribute('class', 'hidden');
    console.log(ingredients);
    console.log(methods);
}

function send() {
    getData();
    getMet();
}

editIngBtn.addEventListener('click', moveToEditIng);
editMetBtn.addEventListener('click', moveToEditMet);
reviewRecBtn.forEach(a => a.addEventListener('click', recRev));
editInfoBtn.addEventListener('click', moveToEditInfo);
editImgBtn.addEventListener('click', imageUpload);
addIngredient.addEventListener('click', addIngLine);
plusMethod.addEventListener('click', addingMethod);
submitBtn.addEventListener('click', send)


function getData() {
    fetch('/getData', {
            method: 'POST',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ingredients
            })
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error)
        })
};

function getMet() {
    fetch('/getMet', {
            method: 'POST',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                methods
            })
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error)
        })
};

function getPyIng() {
    fetch('/giveData')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {

            console.log('GET response as JSON:');
            console.log(json);
            ingredients = (json[0])
            console.log(ingredients)
        })
}

function getPyMet() {

    fetch('/giveMet')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log('GET response as JSON:');
            console.log(json); // Here’s our JSON object
            methods = (json[0])
            console.log(methods)
        })
}