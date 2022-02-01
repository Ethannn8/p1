let replayGame = "yes";
let mood = 5;
let belly = 5;
let thirstiness = 5;


function feedPet() {
    console.log("Feeding pet...");

    console.log("belly: " + belly);

    if (belly < 10) {
        belly += 1;
    }
    refreshUI();
}

function petPet() {
    console.log("Petting pet...");

    console.log("Mood: " + mood);

    if (mood < 10) {
        mood += 1;
    }
    refreshUI();

}

function waterPet() {
    console.log("Giving pet water...");

    console.log("Thirstiness: " + thirstiness);

    if (thirstiness < 10) {
        thirstiness += 1;
    }
    resfreshUI();
}

function refreshUI() {
    let bellyMeter = document.getElementById("belly-meter");
    bellyMeter.value = belly;
    let bellyParagraph = document.getElementById("belly-paragraph");
    bellyParagraph.innerHTML = belly;

    let happinessMeter = document.getElementById("happiness-meter");
    happinessMeter.value = mood;
    let happinessParagraph = document.getElementById("happiness-paragraph");
    happinessParagraph.innerHTML = mood;

    let thirstinessMeter = document.getElementById("thirstiness-meter");
    thirstinessMeter.value = thirstiness;
    let thirstinessParagraph = document.getElementById("thirstiness-paragraph");
    thirstinessParagraph.innerHTML = thirstiness;


    let petImg = document.getElementById("petImg")




    if (mood === 0 && belly === 0 && thirstiness === 0) {
        petImg.src = "images/gameover.jpg";

        replayGame = prompt("Would you like to play again (yes/no)? ");

        if (replayGame === "yes") {

            startOver()

        } else {
            document.getElementById("belly-button").disabled = true;

            document.getElementById("happiness-button").disabled = true;

            document.getElementById("thirstiness-button").disabled = true;
        }

    } else if (mood <= 3 && belly <= 3 && thirstiness <= 3) {
        petImg.src = "images/dead.jpg";
    } else if (mood >= 7 && belly >= 7 && thirstiness >= 7) {
        petImg.src = "images/download.jpg";
    } else if (mood <= 3) {
        petImg.src = "images/sad.jpg";

    } else if (belly <= 3) {
        petImg.src = "images/hungry.jpg";
    } else if (thirstiness <= 3) {
        petImg.src = "images/thirsty.jpg";
    } else if (mood >= 4 && belly >= 4 && thirstiness >= 4) {
        petImg.src = "images/middle.jpg";

    }






}

setInterval(decreaseBelly, 1500);

function decreaseBelly() {
    if (belly > 0) {

        belly = belly - 1;
        refreshUI()
    }
}

setInterval(decreaseMood, 2000);

function decreaseMood() {
    if (mood > 0) {

        mood = mood - 1;
        refreshUI()
    }
}

setInterval(decreaseThirst, 1200);

function decreaseThirst() {
    if (thirstiness > 0) {

        thirstiness = thirstiness - 1;
        refreshUI()
    }

}

function startOver() {

    mood = 5;
    belly = 5;
    thirstiness = 5;
    decreaseThirst()
    decreaseMood()
    decreaseBelly()
    refreshUI()
    petPet()
    feedPet()
    waterPet()

}