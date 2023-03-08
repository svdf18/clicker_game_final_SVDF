"use strict"

const mainElementContainer1 = document.querySelector("#main_element_container1");
const mainElementContainer2 = document.querySelector("#main_element_container2");
const mainElementContainer3 = document.querySelector("#main_element_container3");
const mainElementContainer4 = document.querySelector("#main_element_container4");

const mainElementSprite1 = document.querySelector("#main_element_sprite1");
const mainElementSprite2 = document.querySelector("#main_element_sprite2");
const mainElementSprite3 = document.querySelector("#main_element_sprite3");
const mainElementSprite4 = document.querySelector("#main_element_sprite4");

const mainElementGif1 = document.querySelector("#main_element_sprite_dissolve1");
const mainElementGif2 = document.querySelector("#main_element_sprite_dissolve2");
const mainElementGif3 = document.querySelector("#main_element_sprite_dissolve3");
const mainElementGif4 = document.querySelector("#main_element_sprite_dissolve4");

const badElementContainer1 = document.querySelector("#bad_element_container1");
const badElementContainer2 = document.querySelector("#bad_element_container2");
const badElementContainer3 = document.querySelector("#bad_element_container3");
const badElementContainer4 = document.querySelector("#bad_element_container4");

const badElementSprite1 = document.querySelector("#bad_element_sprite1");
const badElementSprite2 = document.querySelector("#bad_element_sprite2");
const badElementSprite3 = document.querySelector("#bad_element_sprite3");
const badElementSprite4 = document.querySelector("#bad_element_sprite4");

const badElementGif1 = document.querySelector("#bad_element_sprite_dissolve1");
const badElementGif2 = document.querySelector("#bad_element_sprite_dissolve2");
const badElementGif3 = document.querySelector("#bad_element_sprite_dissolve3");
const badElementGif4 = document.querySelector("#bad_element_sprite_dissolve4");

const mainCharContainer1 = document.querySelector("#main_char_container1");
const mainCharContainer2 = document.querySelector("#main_char_container2");
const mainCharContainer3 = document.querySelector("#main_char_container3");

const elementCount = document.querySelector("#element_count");

let points = 0;
let lives=0;

window.addEventListener("load", ready);

function ready() {
    console.log("js running ye!");
    document.querySelector("#btn_start").addEventListener("click", startGame);
    document.querySelector("#btn_restart").addEventListener("click", startGame);
    document.querySelector("#btn_go_to_start").addEventListener("click", showStartScreen);
}

function showGameScreen(){
    document.querySelector("#startscreen").classList.add("hidden");
    document.querySelector("#game_over").classList.add("hidden");
    document.querySelector("#level_complete").classList.add("hidden");
}

function showStartScreen(){
    document.querySelector("#startscreen").classList.remove("hidden");
    document.querySelector("#game_over").classList.add("hidden");
    document.querySelector("#level_complete").classList.add("hidden");
}

function showMainChars(){
    mainCharContainer1.classList.remove("hidden");
    mainCharContainer2.classList.remove("hidden");
    mainCharContainer3.classList.remove("hidden");
}

function showElements(){
    mainElementContainer1.classList.remove("hidden");
    mainElementContainer2.classList.remove("hidden");
    mainElementContainer3.classList.remove("hidden");
    mainElementContainer4.classList.remove("hidden");

    badElementContainer1.classList.remove("hidden");
    badElementContainer2.classList.remove("hidden");
    badElementContainer3.classList.remove("hidden");
    badElementContainer4.classList.remove("hidden");

    document.querySelector("#life_element_container").classList.remove("hidden");
}

function randomAudio1(){
    if (Math.random() < 0.25) {
        document.querySelector("#good1_audio").play();   
    } else if (Math.random() >= 0.25 <0.5) {
        document.querySelector("#good2_audio").play();
    } else if (Math.random() >= 0.5 <0.75) {
        document.querySelector("#good9_audio").play();
    } else if (Math.random() >= 0.75) {
        document.querySelector("#good12_audio").play();
    }
}

function randomAudio2(){

    if (Math.random() < 0.25) {
        document.querySelector("#good5_audio").play();   
    } else if (Math.random() >= 0.25 <0.5) {
        document.querySelector("#life1_audio").play();
    } else if (Math.random() >= 0.5 <0.75) {
        document.querySelector("#life2_audio").play();
    } else if (Math.random() >= 0.75) {
        document.querySelector("#good8_audio").play();
    }
}

function randomAudio3(){

    if (Math.random() < 0.25) {
        document.querySelector("#chord1_audio").play();   
    } else if (Math.random() >= 0.25 <0.5) {
        document.querySelector("#chord2_audio").play();
    } else if (Math.random() >= 0.5 <0.75) {
        document.querySelector("#chord3_audio").play();
    } else {
        document.querySelector("#chord4_audio").play();
    }
}

function resetRandomAudio(){
    document.querySelector("#good1_audio").pause();
    document.querySelector("#good2_audio").pause();
    document.querySelector("#good9_audio").pause();
    document.querySelector("#good12_audio").pause();
    document.querySelector("#good5_audio").pause();
    document.querySelector("#good8_audio").pause();
    document.querySelector("#life1_audio").pause();
    document.querySelector("#life2_audio").pause();
    document.querySelector("#chord1_audio").pause();
    document.querySelector("#chord2_audio").pause();
    document.querySelector("#chord3_audio").pause();
    document.querySelector("#chord4_audio").pause();
}

function resetAudio(){
    document.querySelector("#audio_bg").pause();
    document.querySelector("#audio_bg2").pause();
}

function resetBadAudio(){
    document.querySelector("#bad1_audio").pause();
    document.querySelector("#bad2_audio").pause();
    document.querySelector("#bad3_audio").pause();
    document.querySelector("#bad4_audio").pause();
}

function resetLives(){
    lives = 6;

    document.querySelector("#life1").classList.remove("broken_life");
    document.querySelector("#life2").classList.remove("broken_life");
    document.querySelector("#life3").classList.remove("broken_life");
    document.querySelector("#life4").classList.remove("broken_life");
    document.querySelector("#life5").classList.remove("broken_life");
    document.querySelector("#life6").classList.remove("broken_life");
    document.querySelector("#life1").classList.add("active_life");
    document.querySelector("#life2").classList.add("active_life");
    document.querySelector("#life3").classList.add("active_life");
    document.querySelector("#life4").classList.add("active_life");
    document.querySelector("#life5").classList.add("active_life");
    document.querySelector("#life6").classList.add("active_life");
}

function resetPoints(){
    points = 0;
    displayPoints();

}

function startGame(){
    console.log("game is running");

    resetLives();
    resetPoints();
    showGameScreen();
    showMainChars();
    showElements();
    resetAudio();
    resetBadAudio();
    startTimer();
    resetRandomAudio();

    document.querySelector("#startscreen").classList.add("hidden");
    document.querySelector("#game_over").classList.add("hidden");
    document.querySelector("#game_ui").classList.remove("hidden");

    document.querySelector("#audio_bg").play();
    document.querySelector("#audio_bg2").play();

    mainElementContainer1.classList.add("move_center1");
    mainElementContainer2.classList.add("move_center2");
    mainElementContainer3.classList.add("move_center3");
    mainElementContainer4.classList.add("move_center4");

    badElementContainer1.classList.add("move_across1");
    badElementContainer2.classList.add("move_across2");
    badElementContainer3.classList.add("move_across3");
    badElementContainer4.classList.add("move_across4");

    document.querySelector("#life_element_container").classList.add("move_life");

    mainCharContainer1.classList.add("pulse");
    mainCharContainer2.classList.add("pulse");
    mainCharContainer3.classList.add("pulse");
    document.querySelector("#main_char_gif").classList.add("pulse");
    document.querySelector("#main_char_gif").classList.add("rotate360");
    
    mainElementContainer1.addEventListener("click", clickMe1);
    mainElementContainer2.addEventListener("click", clickMe2);
    mainElementContainer3.addEventListener("click", clickMe3);
    mainElementContainer4.addEventListener("click", clickMe4);

    badElementContainer1.addEventListener("click", clickBe1);
    badElementContainer2.addEventListener("click", clickBe2);
    badElementContainer3.addEventListener("click", clickBe3);
    badElementContainer4.addEventListener("click", clickBe4);

    document.querySelector("#life_element_container").addEventListener("click", clickLe);

}

//main elements

function clickMe1() {
    console.log("click me1");
    mainElementContainer1.removeEventListener("click", goneMe1);
    mainElementContainer1.classList.add("paused");
    mainElementSprite1.classList.add("dissolve");
    mainElementGif1.classList.remove("hidden");
    mainElementContainer1.addEventListener("animationend", goneMe1);

    document.querySelector("#hit1_audio").play();

    randomAudio1();
    incrementPoints();
}

function goneMe1() {
    console.log("restartME1")
    mainElementContainer1.removeEventListener("animationend", goneMe1)
    mainElementSprite1.classList.remove("dissolve");
    mainElementContainer1.classList.remove("paused");
    mainElementContainer1.classList.remove("move_center1");
    mainElementContainer1.classList.remove("move_center1_adjust");
    mainElementContainer1.offsetWidth;
    mainElementGif1.classList.add("hidden");
    mainElementContainer1.addEventListener("click", clickMe1);
    
    function move_adjust_1(){
    
        if (Math.random() < 0.5) {
            mainElementContainer1.classList.add("move_center1")
        } else {
            mainElementContainer1.classList.add("move_center1_adjust")
        }
    }

    move_adjust_1();
}

function clickMe2() {
    console.log("click me2");
    mainElementContainer2.removeEventListener("click", goneMe2);
    mainElementContainer2.classList.add("paused");
    mainElementSprite2.classList.add("dissolve");
    mainElementGif2.classList.remove("hidden");
    mainElementContainer2.addEventListener("animationend", goneMe2);

    document.querySelector("#hit2_audio").play();

    randomAudio1();
    incrementPoints();
}

function goneMe2() {
    console.log("restartME2")
    mainElementContainer2.removeEventListener("animationend", goneMe2)
    mainElementSprite2.classList.remove("dissolve");
    mainElementContainer2.classList.remove("paused");
    mainElementContainer2.classList.remove("move_center2");
    mainElementContainer2.classList.remove("move_center2_adjust");
    mainElementContainer2.offsetWidth;
    mainElementGif2.classList.add("hidden");
    mainElementContainer2.addEventListener("click", clickMe2);

    function move_adjust_2(){
    
        if (Math.random() < 0.5) {
            mainElementContainer2.classList.add("move_center2")
        } else {
            mainElementContainer2.classList.add("move_center2_adjust")
        }
    }

    move_adjust_2();
}

function clickMe3() {
    console.log("click me3");
    mainElementContainer3.removeEventListener("click", goneMe3);
    mainElementContainer3.classList.add("paused");
    mainElementSprite3.classList.add("dissolve");
    mainElementGif3.classList.remove("hidden");
    mainElementContainer3.addEventListener("animationend", goneMe3);

    document.querySelector("#hit3_audio").play();

    randomAudio2();
    incrementPoints();
}

function goneMe3() {
    console.log("restartME3")
    mainElementContainer3.removeEventListener("animationend", goneMe3)
    mainElementSprite3.classList.remove("dissolve");
    mainElementContainer3.classList.remove("paused");
    mainElementContainer3.classList.remove("move_center3");
    mainElementContainer3.classList.remove("move_center3_adjust");
    mainElementContainer3.offsetWidth;
    mainElementGif3.classList.add("hidden");
    mainElementContainer3.addEventListener("click", clickMe3);

    function move_adjust_3(){
    
        if (Math.random() < 0.5) {
            mainElementContainer3.classList.add("move_center3")
        } else {
            mainElementContainer3.classList.add("move_center3_adjust")
        }
    }

    move_adjust_3();
}

function clickMe4() {
    console.log("click me4");
    mainElementContainer4.removeEventListener("click", goneMe4);
    mainElementContainer4.classList.add("paused");
    mainElementSprite4.classList.add("dissolve");
    mainElementGif4.classList.remove("hidden");
    mainElementContainer4.addEventListener("animationend", goneMe4);
    document.querySelector("#hit4_audio").play();

    randomAudio2();
    incrementPoints();
}

function goneMe4() {
    console.log("restartME4")
    mainElementContainer4.removeEventListener("animationend", goneMe4)
    mainElementSprite4.classList.remove("dissolve");
    mainElementContainer4.classList.remove("paused");
    mainElementContainer4.classList.remove("move_center4");
    mainElementContainer4.classList.remove("move_center4_adjust");
    mainElementContainer4.offsetWidth;
    mainElementGif4.classList.add("hidden");
    mainElementContainer4.addEventListener("click", clickMe4);

    function move_adjust_4(){
    
        if (Math.random() < 0.5) {
            mainElementContainer4.classList.add("move_center4")
        } else {
            mainElementContainer4.classList.add("move_center4_adjust")
        }
    }

    move_adjust_4();
}

// bad elements

function clickBe1() {
    console.log("click be1")
    badElementContainer1.removeEventListener("click", clickBe1);
    badElementContainer1.classList.add("paused");
    badElementSprite1.classList.add("dissolve_up");
    badElementGif1.classList.remove("hidden");
    badElementContainer1.addEventListener("animationend", goneBe1);
    document.querySelector("#bad1_audio").play();
    document.querySelector("#bad1_audio_hit").play();
    decrementLives();
}

function goneBe1() {
    console.log("restartBE1")
    badElementContainer1.removeEventListener("animationend", goneBe1);
    badElementSprite1.classList.remove("dissolve_up");
    badElementContainer1.classList.remove("paused");
    badElementContainer1.classList.remove("move_across1");
    badElementContainer1.offsetWidth;
    badElementGif1.classList.add("hidden");
    badElementContainer1.classList.add("move_across1")
    badElementContainer1.addEventListener("click", clickBe1);
}

function clickBe2() {
    console.log("click be2")
    badElementContainer2.removeEventListener("click", clickBe2);
    badElementContainer2.classList.add("paused");
    badElementSprite2.classList.add("dissolve_up");
    badElementGif2.classList.remove("hidden");
    badElementContainer2.addEventListener("animationend", goneBe2);
    document.querySelector("#bad2_audio").play();
    document.querySelector("#bad2_audio_hit").play();
    decrementLives();
}

function goneBe2() {
    console.log("restartBE2")
    badElementContainer2.removeEventListener("animationend", goneBe2);
    badElementSprite2.classList.remove("dissolve_up");
    badElementContainer2.classList.remove("paused");
    badElementContainer2.classList.remove("move_across2");
    badElementContainer2.offsetWidth;
    badElementGif2.classList.add("hidden");
    badElementContainer2.classList.add("move_across2")
    badElementContainer2.addEventListener("click", clickBe2);
}

function clickBe3() {
    console.log("click be3")
    badElementContainer3.removeEventListener("click", clickBe3);
    badElementContainer3.classList.add("paused");
    badElementSprite3.classList.add("dissolve_up");
    badElementGif3.classList.remove("hidden");
    badElementContainer3.addEventListener("animationend", goneBe3);
    document.querySelector("#bad3_audio").play();
    document.querySelector("#bad3_audio_hit").play();
    decrementLives();
}

function goneBe3() {
    console.log("restartBE3")
    badElementContainer3.removeEventListener("animationend", goneBe3);
    badElementSprite3.classList.remove("dissolve_up");
    badElementContainer3.classList.remove("paused");
    badElementContainer3.classList.remove("move_across3");
    badElementContainer3.offsetWidth;
    badElementGif3.classList.add("hidden");
    badElementContainer3.classList.add("move_across3")
    badElementContainer3.addEventListener("click", clickBe3);
}

function clickBe4() {
    console.log("click be4")
    badElementContainer4.removeEventListener("click", clickBe4);
    badElementContainer4.classList.add("paused");
    badElementSprite4.classList.add("dissolve_up");
    badElementGif4.classList.remove("hidden");
    badElementContainer4.addEventListener("animationend", goneBe4);
    document.querySelector("#bad4_audio").play();
    document.querySelector("#bad4_audio_hit").play();
    decrementLives();
}

function goneBe4() {
    console.log("restartBE4")
    badElementContainer4.removeEventListener("animationend", goneBe4);
    badElementSprite4.classList.remove("dissolve_up");
    badElementContainer4.classList.remove("paused");
    badElementContainer4.classList.remove("move_across4");
    badElementContainer4.offsetWidth;
    badElementGif4.classList.add("hidden");
    badElementContainer4.classList.add("move_across4")
    badElementContainer4.addEventListener("click", clickBe4);
}

// life element

function clickLe(){
    console.log("click life element");
    document.querySelector("#life_element_container").removeEventListener("click", clickLe);
    document.querySelector("#life_element_container").classList.add("paused");
    document.querySelector("#life_element_sprite").classList.add("dissolve_up");
    document.querySelector("#life_element_sprite_dissolve").classList.remove("hidden");
    document.querySelector("#life_element_sprite_dissolve").classList.add("dissolve_up_life");
    document.querySelector("#life_element_container").addEventListener("animationend", goneLe);
    // document.querySelector(audiohit)
    
    randomAudio3();
    
    if (lives < 6) {
        incrementLives();
    }

}

function goneLe(){
    console.log("restart life element");
    document.querySelector("#life_element_container").removeEventListener("animationend", goneLe);
    document.querySelector("#life_element_sprite").classList.remove("dissolve_up");
    document.querySelector("#life_element_sprite_dissolve").classList.remove("dissolve_up_life");
    document.querySelector("#life_element_container").classList.remove("paused");
    document.querySelector("#life_element_container").classList.remove("move_life");
    document.querySelector("#life_element_container").classList.remove("move_life_adjust1");
    document.querySelector("#life_element_container").classList.remove("move_life_adjust2");
    document.querySelector("#life_element_container").offsetWidth;
    document.querySelector("#life_element_sprite_dissolve").classList.add("hidden");
    document.querySelector("#life_element_container").addEventListener("click", clickLe);
    
    function move_life_adjust_1(){
    
        if (Math.random() < 0.3) {
            document.querySelector("#life_element_container").classList.add("move_life")
        } else if (Math.random() >= 0.3 <0.6) {
            document.querySelector("#life_element_container").classList.add("move_life_adjust1")
        } else {
            document.querySelector("#life_element_container").classList.add("move_life_adjust2")
        }
    }

    move_life_adjust_1();
}

//////

function startTimer(){
    document.querySelector("#time_sprite1").classList.add("pulse_glow_ts1");
    document.querySelector("#time_sprite2").classList.add("pulse_glow_ts2_ts5");
    document.querySelector("#time_sprite3").classList.add("pulse_glow_ts3_ts6");
    document.querySelector("#time_sprite4").classList.add("pulse_glow_ts4_ts7");
    document.querySelector("#time_sprite5").classList.add("pulse_glow_ts2_ts5");
    document.querySelector("#time_sprite6").classList.add("pulse_glow_ts3_ts6");
    document.querySelector("#time_sprite7").classList.add("pulse_glow_ts4_ts7");
    document.querySelector("#time_line").classList.add("shrink");


    document.querySelector("#time_sprite1").addEventListener("animationend", timeIsUp);
}

function stopTime() {
    document.querySelector("#time_sprite1").classList.remove("pulse_glow_ts1");
    document.querySelector("#time_sprite2").classList.remove("pulse_glow_ts2_ts5");
    document.querySelector("#time_sprite3").classList.remove("pulse_glow_ts3_ts6");
    document.querySelector("#time_sprite4").classList.remove("pulse_glow_ts4_ts7");
    document.querySelector("#time_sprite5").classList.remove("pulse_glow_ts2_ts5");
    document.querySelector("#time_sprite6").classList.remove("pulse_glow_ts3_ts6");
    document.querySelector("#time_sprite7").classList.remove("pulse_glow_ts4_ts7");
    document.querySelector("#time_line").classList.remove("shrink");
}

function incrementPoints(){
    console.log("increment points");
    points++;
    console.log("har nu " + points + " points"); 
    displayPoints();
    if (points >= 25){
        levelComplete();
    }
}

function displayPoints(){
    console.log("show points")
    elementCount.textContent = points;
}

function decrementLives(){
    console.log("decrement lives");
    if (lives <= 1) {
        gameOver();
    }
    displayDecrementedLives();
    lives--;
}

function incrementLives(){
    console.log("increment lives");
    lives++;
    displayIncrementedLives();
}

function displayDecrementedLives(){
    console.log("decrement lives");
    document.querySelector("#life"+lives).classList.remove("active_life");
    document.querySelector("#life"+lives).classList.add("broken_life");
}

function displayIncrementedLives(){
    document.querySelector("#life"+lives).classList.remove("broken_life");
    document.querySelector("#life"+lives).classList.add("active_life");

}

function gameOver(){
    console.log("game over");
    document.querySelector("#game_over").classList.remove("hidden");
    resetAudio();
    resetRandomAudio();
    stop();
}

function timeIsUp(){
    console.log("times up");
    if (points >= 25) {
        levelComplete();
    } else {
        gameOver();
    }
}

function levelComplete(){
    console.log("level complete");
    document.querySelector("#level_complete").classList.remove("hidden");
    resetBadAudio ();
    stop();
}

function stop() {
    console.log("animation stop");

    mainElementContainer1.classList.remove("move_center1", "move_center1_adjust");
    mainElementContainer2.classList.remove("move_center2", "move_center2_adjust");
    mainElementContainer3.classList.remove("move_center3", "move_center3_adjust");
    mainElementContainer4.classList.remove("move_center4", "move_center4_adjust");

    document.querySelector("#life_element_container").classList.remove("move_life", "move_life_adjust1", "move_life_adjust2")

    mainElementContainer1.classList.add("hidden");
    mainElementContainer2.classList.add("hidden");
    mainElementContainer3.classList.add("hidden");
    mainElementContainer4.classList.add("hidden");

    badElementContainer1.classList.remove("move_across1");
    badElementContainer2.classList.remove("move_across2");
    badElementContainer3.classList.remove("move_across3");
    badElementContainer4.classList.remove("move_across4");

    badElementContainer1.classList.add("hidden");
    badElementContainer2.classList.add("hidden");
    badElementContainer3.classList.add("hidden");
    badElementContainer4.classList.add("hidden");

    mainCharContainer1.classList.add("hidden");
    mainCharContainer2.classList.add("hidden");
    mainCharContainer3.classList.add("hidden");

    stopTime();
}

