const gameContainer = document.getElementById("game");
let waiting = false;
let points = 0;
let activeCard = null;
const rightCount = 10;
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");
    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    //color data to click and color
    newDiv.setAttribute("data-color", color)
    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
    
    newDiv.addEventListener("click",function(e){
      //conditions where dont reveal the card
      if(waiting || newDiv === activeCard){
        return;
      }
      //reveal the color
      newDiv.style.backgroundColor = color;

      //main card
      if(!activeCard){
        activeCard = newDiv;
        return;
      }
         //matching
      const colorMatch = activeCard.getAttribute("data-color")
      if(colorMatch === color){
      activeCard = null;
      waiting = false;
      points += 2;
      //condition to win
      if (points === rightCount){
        alert("YOU WIN")
      }
     return;
    }
      waiting = true
      //time between 2 cards
      setTimeout(function(){
        //restart the event
        newDiv.style.backgroundColor = null;
        activeCard.style.backgroundColor = null

        waiting = false;
        activeCard = null;

      },1000);
      
    })
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
}

// when the DOM loads
createDivsForColors(shuffledColors);

