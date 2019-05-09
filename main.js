//import "My files/downloads/styles.css";

document.body.style.background = "black";


var firstCard = document.createElement("IMG")
firstCard.src = "card1.jpg";
firstCard.width = 125;
firstCard.height = 200;
firstCard.style.margin = "5px 10px";
document.body.appendChild(firstCard);


var secondCard = document.createElement("IMG")
secondCard.src = "card2.jpg";
secondCard.width = 125;
secondCard.height = 200;
secondCard.style.margin = "5px 10px";
document.body.appendChild(secondCard);

var thirdCard = document.createElement("IMG")
thirdCard.src = "card3.jpg";
thirdCard.width = 125;
thirdCard.height = 200;
thirdCard.style.margin = "5px 10px";
document.body.appendChild(thirdCard);

const placeHolder = document.getElementById("placeHolder");
const contextPlaceHolder = placeHolder.getContext("2d");

function blancCard(){
contextPlaceHolder.rect(11, 0, 125, 200);
contextPlaceHolder.fillStyle = "white";
contextPlaceHolder.fill();
};

blancCard()

function randomNumber(min, max){
    let random = Math.floor(Math.random() * (+(max+1) - +min)) + +min; 
    return(random ); 
}

// define all cards
let allCards = [
    ["red", "green", "yellow"],
    ["circle","square", "triangle"],
    [1,2,3]
];

let cardOne = [1,2,0];
let cardTwo = [2,1,1];
let cardThree = [0,0,2];

let possibleRules = ["color", "shape", "number"];


// create random cards
function createCard(){

let randomColor = randomNumber(0,2)
let randomShape = randomNumber(0,2)
let randomNum = randomNumber(0,2)
    
let color = allCards[0][randomColor]
let shape = allCards[1][randomShape]
let number = allCards[2][randomNum]
let distY = -10
let distX = -10
    
contextPlaceHolder.beginPath();
    switch(shape){
	   case "circle":
        switch(number){
            case 1:
            contextPlaceHolder.arc(distX+82, distY+110, 20, 0, 2 * Math.PI);
            break;
                case 2:
                contextPlaceHolder.arc(distX+82, distY+70, 20, 0, 2 * Math.PI);
                contextPlaceHolder.arc(distX+82, distY+140, 20, 0, 2 * Math.PI);
                break;
                    case 3:
                    contextPlaceHolder.arc(distX+82, distY+55, 20, 0, 2 * Math.PI);
                    contextPlaceHolder.arc(distX+82, distY+110, 20, 0, 2 * Math.PI);
                    contextPlaceHolder.arc(distX+82, distY+165, 20, 0, 2 * Math.PI);
                    break;
        }
        break;
            case "square":
                switch(number){
                  case 1:
                  contextPlaceHolder.rect(distX+65, distY+95, 35, 35);
                  break;
                      case 2:
                      contextPlaceHolder.rect(distX+65, distY+50, 35, 35);
                      contextPlaceHolder.rect(distX+65, distY+120, 35, 35);
                      break;
                        case 3:
                        contextPlaceHolder.rect(distX+65, distY+35, 35, 35);
                        contextPlaceHolder.rect(distX+65, distY+90, 35, 35);
                        contextPlaceHolder.rect(distX+65, distY+145, 35, 35);
                        break;
                }
            break;
                case "triangle":
                    switch(number){
                        case 1:
                        contextPlaceHolder.moveTo(distX+80, distY+80);
                        contextPlaceHolder.lineTo(distX+100, distY+120);
                        contextPlaceHolder.lineTo(distX+60, distY+120);
                        break;
                            case 2:
                            contextPlaceHolder.moveTo(distX+80, distY+50);
                            contextPlaceHolder.lineTo(distX+100, distY+90);
                            contextPlaceHolder.lineTo(distX+60, distY+90);

                            contextPlaceHolder.moveTo(distX+80, distY+130);
                            contextPlaceHolder.lineTo(distX+100, distY+170);
                            contextPlaceHolder.lineTo(distX+60, distY+170);
                            contextPlaceHolder.closePath();
                            break;
                                case 3:
                                contextPlaceHolder.moveTo(distX+80, distY+30);
                                contextPlaceHolder.lineTo(distX+100, distY+70);
                                contextPlaceHolder.lineTo(distX+60, distY+70);

                                contextPlaceHolder.moveTo(distX+80, distY+85);
                                contextPlaceHolder.lineTo(distX+100, distY+125);
                                contextPlaceHolder.lineTo(distX+60, distY+125);

                                contextPlaceHolder.moveTo(distX+80, distY+140);
                                contextPlaceHolder.lineTo(distX+100, distY+180);
                                contextPlaceHolder.lineTo(distX+60, distY+180);
                                break;
                    }
                   break;               
	}
    contextPlaceHolder.closePath();
    contextPlaceHolder.fillStyle = color;
    contextPlaceHolder.fill();
    
    let results = [randomColor, randomShape, randomNum]
    return(results)
 }

let iteration = 0;
//var results = createCard();

let rule = randomNumber(0,2);

/*
firstCard.onclick = function(){
    alert(rule)
    if(results[rule] == cardOne[rule]){
        alert("yes!" + " rule was: " + possibleRules[rule])
    } else {
    alert("no..." + " rule was: " + possibleRules[rule])}
    blancCard();
    createCard();
    iteration ++;
    alert(iteration);
};

secondCard.onclick = function(){
    if(results[rule] == cardTwo[rule]){
        alert("yes!" + " rule was: " + possibleRules[rule])
    } else {
    alert("no" + " rule was: " + possibleRules[rule])};
    blancCard();
    createCard();
    iteration ++;
    alert(iteration);
};
    
thirdCard.onclick = function(){
    if(results[rule] == cardThree[rule]){
        alert("yes!" + " rule was: " + possibleRules[rule]);
    iteration ++
    } else {
    alert("no" + " rule was: " + possibleRules[rule])};
    blancCard();
    createCard();
    iteration ++;
    alert(iteration);
};

*/

//let rule = 1;

alert(rule + "==" + cardOne[2]);


