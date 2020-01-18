$(document).ready(function () {
    $('select').formSelect();

});

function addRecipeInfo() {
    let name = document.getElementById('recipe_name').value;
    let serve = document.getElementById('servings').value;
    let prep = document.getElementById('prep_time').value;
    let cook = document.getElementById('cook_time').value;
    result = Number(prep) + Number(cook);
    let rate = document.getElementById('rating').value;
    let carb = document.getElementById('carbs').value;
    let fats = document.getElementById('fat').value;
    let pro = document.getElementById('protein').value;


    document.getElementById('display-r-n').innerHTML = name;
    document.getElementById('display-serv').innerHTML = serve;
    document.getElementById('display-prep').innerHTML = prep;
    document.getElementById('display-cook').innerHTML = cook;
    document.getElementById('display-total').innerHTML = result;
    document.getElementById('display-carb').innerHTML = carb;
    document.getElementById('display-fat').innerHTML = fats;
    document.getElementById('display-pro').innerHTML = pro;
    document.getElementById('display-rating').innerHTML = rate;

}

function moveToIng() {
    newRecipe.setAttribute('class', 'hidden');
    addIng.setAttribute('class', 'visible');
}

function addIngLine() {
    let amount = document.getElementById('amount').value;
    let measurement = document.getElementById('measurement').value;
    let ingredient = document.getElementById('ingredient').value;
    ingredients.push([amount, measurement, ingredient]);
    addLineIngredient.insertAdjacentHTML('beforeend',
        `<li>${amount} ${measurement} ${ingredient}</li>`);

}

function moveToMet() {
    addIng.setAttribute('class', 'hidden');
    addMet.setAttribute('class', 'visible');
}

function addingMethod() {
    let inputMethod = document.getElementById('method').value;
    methods.push(inputMethod);

    addMethod.insertAdjacentHTML('beforeend',
        `<li>${inputMethod}</li>`);

}

function imageUpload() {
    pic.click();
    /*Code for previewing images found https://stackoverflow.com/questions/31710127/javascript-image-upload-and-display */
    let fileTag = document.getElementById("fileInput"),
        preview = document.getElementById("preview"),
        display_image = document.getElementById('display-img');

    fileTag.addEventListener("change", function () {
        changeImage(this);
    });

    function changeImage(input) {
        let reader;

        if (input.files && input.files[0]) {
            reader = new FileReader();

            reader.onload = function (e) {
                preview.setAttribute('src', e.target.result);
                display_image.setAttribute('src', e.target.result)
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

}

function reviewRecipe() {
    addRecipeInfo();
    displayIng.innerHTML = '';
    displayMet.innerHTML = '';
    reviewRec.setAttribute('class', 'visible');
    addMet.setAttribute('class', 'hidden');


    for (let i = 0; i < ingredients.length; i++) {
        displayIng.insertAdjacentHTML("beforeend",
            `<li>${ingredients[i].join(' ')}</li>`)
    };

    for (let m = 0; m < methods.length; m++) {
        displayMet.insertAdjacentHTML('beforeend',
            `<li>${methods[m]}</li>`)
    };

}

function editInfo() {
    newRecipe.setAttribute('class', 'visible');
    addIng.setAttribute('class', 'hidden');
    addMet.setAttribute('class', 'hidden');
}

function editIng() {
    addIng.setAttribute('class', 'visible');
    newRecipe.setAttribute('class', 'hidden');
    addMet.setAttribute('class', 'hidden');
    addLineIngredient.innerHTML = '';
    return ingredients = [];
}

function editMet() {
    addMet.setAttribute('class', 'visible');
    newRecipe.setAttribute('class', 'hidden');
    addIng.setAttribute('class', 'hidden');
    addMethod.innerHTML = '';
    return methods = [];
}

function editImg() {
    addMet.setAttribute('class', 'visible');
    newRecipe.setAttribute('class', 'hidden');
    addIng.setAttribute('class', 'hidden');
}

function refreshReview() {
    reviewRecipe();
    addMet.setAttribute('class', 'hidden');
    newRecipe.setAttribute('class', 'hidden');
    addIng.setAttribute('class', 'hidden');
}

addIngredient.addEventListener('click', addIngLine);
plusMethod.addEventListener('click', addingMethod);
picUpload.addEventListener('click', imageUpload);
review.addEventListener('click', reviewRecipe);
ingBtn.addEventListener('click', moveToIng);
metBtn.addEventListener('click', moveToMet);
editInfoBtn.addEventListener('click', editInfo);
editIngBtn.addEventListener('click', editIng);
editMetBtn.addEventListener('click', editMet);
editImgBtn.addEventListener('click', editImg);
refreshBtn.addEventListener('click', refreshReview);