const reviewRecBtn = document.querySelectorAll('.review_recipe ')
const reviewRec = document.querySelector('#edit_review')
const editInfo = document.querySelector('#edit_recipe');
const editIngBtn = document.querySelector('#edit-ing-btn');
const editRecIng = document.querySelector('#edit_ingredients');
const editMetBtn = document.querySelector('#edit-met-btn');
const editRecMet = document.querySelector('#edit_method');
const editInfoBtn = document.querySelector('#edit-info-btn');

function moveToEditIng() {
    reviewRec.setAttribute('class', 'hidden')
    editInfo.setAttribute('class', 'hidden');
    editRecIng.setAttribute('class', 'visible');
    editRecMet.setAttribute('class', 'hidden');
}

function moveToEditMet() {
    reviewRec.setAttribute('class', 'hidden')
    editRecIng.setAttribute('class', 'hidden');
    editRecMet.setAttribute('class', 'visible');
    editInfo.setAttribute('class', 'hidden');
}

function moveToEditInfo() {
    reviewRec.setAttribute('class', 'hidden')
    editInfo.setAttribute('class', 'visible');
    editRecIng.setAttribute('class', 'hidden');
    editRecMet.setAttribute('class', 'hidden');
}

function recRev() {
    reviewRec.setAttribute('class', 'visible')
    editInfo.setAttribute('class', 'hidden');
    editRecIng.setAttribute('class', 'hidden');
    editRecMet.setAttribute('class', 'hidden');
}

editIngBtn.addEventListener('click', moveToEditIng);
editMetBtn.addEventListener('click', moveToEditMet);
reviewRecBtn.addEventListener('click', recRev)
editInfoBtn.addEventListener('click', moveToEditInfo);