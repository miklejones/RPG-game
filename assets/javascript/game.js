//Variable gloabal to the runtime of out application
var isCharacterChosen = false;
var isEnemyChosen = false;
var userHP = 0;
var userAP = 0;
var userCAP = 0;
var enemyHP = 0;
var enemyAP = 0;
var enemyCAP = 0;

//Create objects for character tracking
var pewDiePie = {
    name: 'PewDiePie',
    healthPoints: 180,
    attackPower: 13,
    counterAttackPower: 25,
    imgSrc: 'assets/images/pewdiepie.jpg'
};

var h3h3 = {
    name: 'h3h3',
    healthPoints: 100,
    attackPower: 5,
    counterAttackPower: 10,
    imgSrc: 'assets/images/h3h3.jpg'

};

var paulBrothers = {
    name: 'The Paul Brothers',
    healthPoints: 150,
    attackPower: 10,
    counterAttackPower: 20,
    imgSrc: 'assets/images/paulbrothers.jpg'

};

var iDubbbztv = {
    name: 'iDubbbzTV',
    healthPoints: 120,
    attackPower: 8,
    counterAttackPower: 15,
    imgSrc: 'assets/images/idubbbz.jpg'

};
var pewDiePieCard = `<div class="character-piece" id="pewdiepie-card"><p class="card-title">${pewDiePie.name}</p><img class="character-picture" src=${pewDiePie.imgSrc} /><p class="stats">AP:${pewDiePie.attackPower}<br>CAP:${pewDiePie.counterAttackPower}<br>HP:${pewDiePie.healthPoints}</p></div>`;
var h3h3Card = `<div class="character-piece" id="h3h3-card"><p class="card-title">${h3h3.name}</p><img class="character-picture" src=${h3h3.imgSrc} /><p class="stats">AP:${h3h3.attackPower}<br>CAP:${h3h3.counterAttackPower}<br>HP:${h3h3.healthPoints}</p></div>`;
var paulBrothersCard = `<div class="character-piece" id="paulbros-card"><p class="card-title">${paulBrothers.name}</p><img class="character-picture" src=${paulBrothers.imgSrc} /><p class="stats">AP:${paulBrothers.attackPower}<br>CAP:${paulBrothers.counterAttackPower}<br>HP:${paulBrothers.healthPoints}</p></div>`;
var iDubbbzTVCard = `<div class="character-piece" id="idubbbz-card"><p class="card-title">${iDubbbztv.name}</p><img class="character-picture" src=${iDubbbztv.imgSrc} /><p class="stats">AP:${iDubbbztv.attackPower}<br>CAP:${iDubbbztv.counterAttackPower}<br>HP:${iDubbbztv.healthPoints}</p></div>`;

function newRound() {
    $('#character-options').html(pewDiePieCard)
    $('#character-options').append(h3h3Card)
    $('#character-options').append(paulBrothersCard)
    $('#character-options').append(iDubbbzTVCard)
};

//Start game on page loading
$(document).ready(function () {



    //Place cards
    newRound();

    $("#character-options").on("click", ".character-piece", function () {
        if (isEnemyChosen) {
            return false;
        };

        if (!isCharacterChosen) {
            console.log(this.id);
            switch (this.id) {
                case 'pewdiepie-card':
                    userAP = pewDiePie.attackPower;
                    userCAP = pewDiePie.counterAttackPower;
                    userHP = pewDiePie.healthPoints;
                    break;
                case 'h3h3-card':
                    userAP = h3h3.attackPower;
                    userCAP = h3h3.counterAttackPower;
                    userHP = h3h3.healthPoints;
                    break;
                case 'paulbros-card':
                    userAP = paulBrothers.attackPower;
                    userCAP = paulBrothers.counterAttackPower;
                    userHP = paulBrothers.healthPoints;
                    break;
                case 'idubbbz-card':
                    userAP = iDubbbztv.attackPower;
                    userCAP = iDubbbztv.counterAttackPower;
                    userHP = iDubbbztv.healthPoints;
            }
            $('#your-character').html(this);
            $('#character-options').appendTo('#enemies-box');
            isCharacterChosen = true;
        } else {
            switch (this.id) {
                case 'pewdiepie-card':
                    enemyAP = pewDiePie.attackPower;
                    enemyCAP = pewDiePie.counterAttackPower;
                    enemyHP = pewDiePie.healthPoints;
                    break;
                case 'h3h3-card':
                    enemyAP = h3h3.attackPower;
                    enemyCAP = h3h3.counterAttackPower;
                    enemyHP = h3h3.healthPoints;
                    break;
                case 'paulbros-card':
                    enemyAP = paulBrothers.attackPower;
                    enemyCAP = paulBrothers.counterAttackPower;
                    enemyHP = paulBrothers.healthPoints;
                    break;
                case 'idubbbz-card':
                    enemyAP = iDubbbztv.attackPower;
                    enemyCAP = iDubbbztv.counterAttackPower;
                    enemyHP = iDubbbztv.healthPoints;
            }

            $('#opponent').html(this);
            isEnemyChosen = true;
        };

    });

    $('#attack-button').on('click', function () {
        if (!isCharacterChosen) {
            alert('Pick a YouTuber to attack with first.');
        } else if (!isEnemyChosen) {
            alert('Pick an enemy.');
        } else {
            userHP -= enemyCAP;
            enemyHP -= userAP
            userAP = userAP + userAP;
        };
    });

});

