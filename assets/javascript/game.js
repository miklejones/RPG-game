var pewDiePie = {
    name: 'PewDiePie',
    healthPoints: 0,
    attackPower: 0,
    counterAttackPower: 0,
    imgSrc: 'assets/images/pewdiepie.jpg'
};

var h3h3 = {
    name: 'h3h3',
    healthPoints: 0,
    attackPower: 0,
    counterAttackPower: 0,
    imgSrc: 'assets/images/h3h3.jpg'

};

var paulBrothers = {
    name: 'The Paul Brothers',
    healthPoints: 0,
    attackPower: 0,
    counterAttackPower: 0,
    imgSrc: 'assets/images/paulbrothers.jpg'

};

var iDubbbztv = {
    name: 'iDubbbzTV',
    healthPoints: 0,
    attackPower: 0,
    counterAttackPower: 0,
    imgSrc: 'assets/images/idubbbz.jpg'

};

function newRound() {
    $('#character-options').html(`<div class="character-piece"><p class="card-title">${pewDiePie.name}</p><img class="character-picture" src=${pewDiePie.imgSrc} /><p class="stats">AP:${pewDiePie.attackPower}<br>CAP:${pewDiePie.counterAttackPower}<br>HP:${pewDiePie.healthPoints}</p></div>`)
    $('#character-options').append(`<div class="character-piece"><p class="card-title">${h3h3.name}</p><img class="character-picture" src=${h3h3.imgSrc} /><p class="stats">AP:${h3h3.attackPower}<br>CAP:${h3h3.counterAttackPower}<br>HP:${h3h3.healthPoints}</p></div>`)
    $('#character-options').append(`<div class="character-piece"><p class="card-title">${paulBrothers.name}</p><img class="character-picture" src=${paulBrothers.imgSrc} /><p class="stats">AP:${paulBrothers.attackPower}<br>CAP:${paulBrothers.counterAttackPower}<br>HP:${paulBrothers.healthPoints}</p></div>`)
    $('#character-options').append(`<div class="character-piece"><p class="card-title">${iDubbbztv.name}</p><img class="character-picture" src=${iDubbbztv.imgSrc} /><p class="stats">AP:${iDubbbztv.attackPower}<br>CAP:${iDubbbztv.counterAttackPower}<br>HP:${iDubbbztv.healthPoints}</p></div>`)
};

$(document).ready(function () {
    console.log('rappa da rappa');
    newRound();
})