let varA = 1;
let varB = 1;

let Rebirths = 0;
let Points = 0;
let Money = 0;
let Multyplier = 1;
let MultTime = false;

var cooldownTime = 120;
var lastClickTime = 0;

document.getElementById('Show_hideId').style.display = "none";

document.getElementById('CookieBTN').onclick = function(){
    var currentTime = new Date().getTime();

    if (currentTime - lastClickTime >= cooldownTime) {
        lastClickTime = currentTime;

        Points += Multyplier;
        document.getElementById('points').innerHTML = "Your points: " + Math.round(Points);

        if (MultTime == true) {
            document.getElementById('Multyplier').innerHTML = "Multiplier = " + MultTime + " (x" + Multyplier + ")";
            document.getElementById('Multyplier').style.color = "green";
            document.getElementById('Multyplier').style.textShadow = "2px 2px 2px green";
        }

        if (MultTime == false) {
            document.getElementById('Multyplier').innerHTML = "Multiplier = false (x0)";
            document.getElementById('Multyplier').style.color = "darkred";
            document.getElementById('Multyplier').style.textShadow = "2px 2px 2px #8b1212";
            Multyplier = 1;
        }
    } else {
        // Display a message or take some action to indicate that the button is on cooldown
        console.log("Cooldown active. Please wait before clicking again.");
    }
}
//Shop show_hideFunction
function show_hide(){
    if (varA == 1){
        document.getElementById('Show_hideId').style.display = "inline";
        return varA = 0;
    }

    else{
        document.getElementById('Show_hideId').style.display = "none";
        return varA = 1;
    }
}
//SleepMS

//Shop: --------

// 1.5x Boost (550p), 3 Minutes
async function Buyed1(){
    if (Points >= 450 ){
        Points -= 450;
        MultTime = true;
        Multyplier = 1.5;
        document.getElementById('points').innerHTML = "Your points: " + Math.round(Points);
        document.getElementById('Shop1').disabled = true
        await sleep(180000);
        document.getElementById('Shop1').disabled = false
        MultTime = false;
        Multyplier = 1;
    }
    else {

    }
}
// 2x Boost (1.000p), 3 Minutes
async function Buyed2(){
    if (Points >= 1000 ){
        Points -= 1000;
        MultTime = true;
        Multyplier = 2;
        document.getElementById('points').innerHTML = "Your points: " + Math.round(Points);
        document.getElementById('Shop2').disabled = true
        await sleep(180000);
        document.getElementById('Shop2').disabled = false
        MultTime = false;
        Multyplier = 1;
    }
    else {

    }
}
// 2.5x Boost (1.750), 4 Minutes
async function Buyed3(){
    if (Points >= 1750 ){
        Points -= 1750;
        MultTime = true;
        Multyplier = 2.5;
        document.getElementById('points').innerHTML = "Your points: " + Math.round(Points);
        document.getElementById('Shop3').disabled = true
        await sleep(240000); 
        document.getElementById('Shop3').disabled = false
        MultTime = false;
        Multyplier = 1;
    }
    else {

    }
}
// 3x Boost (4.800), 5 Minutes
async function Buyed4(){
    if (Points >= 4800 ){
        Points -= 4800;
        MultTime = true;
        Multyplier = 3;
        document.getElementById('points').innerHTML = "Your points: " + Math.round(Points);
        document.getElementById('Shop4').disabled = true
        await sleep(240000); 
        document.getElementById('Shop4').disabled = false
        MultTime = false;
        Multyplier = 1;
    }
    else {

    }
}
// 1 Rebirth (10.000)
async function Buyed5(){
    if (Points >= 10000 ){
        Points -= 10000;
        Rebirths += 1;
        document.getElementById('rebirths').innerHTML = "Your Rebirths: " + Math.round(Rebirths);
        document.getElementById('points').innerHTML = "Your points: " + Math.round(Points);
    }
    else {

    }
}