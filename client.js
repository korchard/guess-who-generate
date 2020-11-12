console.log('Here are all the available people:', people);

$(document).ready(onReady);

let min = 0;
let max = people.length;
let randomIndex = randomNumber(min, max);

function onReady() {
    console.log('in jQuery');
    display(); // displays the images on the DOM
    keepPlaying(); // displays initial random number to DOM
    $('.people').on('click', '.thisOne', isItThem); // event handler to Guess Who!
    $('#continue').on('click', keepPlaying); // button to continue to play the game and generate random people
} // end onReady function

function display() {
    shuffle(people);
    for (let individual of people) {
        $('.people').append(
            `<div class="images" data-person="${individual.name}">
                <button class="thisOne"><img src="https://github.com/${individual.githubUsername}.png?size=250" 
                alt="Profile image of ${individual.name}"></button>
                </div>`);
    } // loop through array of people and append the images to the DOM
} // end display function

function isItThem() {
    let person = $(this).parent().data('person');
    if (people[randomIndex].name == person) { // determines if the image clicked on matches the random person
        alert('YAAAAS! You got it!');

        //TRYING TO CREATE AN ANIMATION OF SORTS FOR WHEN CORRECT ONE IS GUESSED
        movePic();
        //keepPlaying(); // automatically randomizes another person after correct person is chosen - can still press button if you want
    } else {
        alert('You did NOT guess who!');
    } // end conditional 
} // end isItThem function

function randomNumber(min, max){ // this function was provided for us
    return Math.floor(Math.random() * (1 + max - min) + min);
} // end randomNumber function

function keepPlaying() {
    randomIndex = randomNumber(min, max); // randomizes the next person to guess
    alert(`Choose ${people[randomIndex].name}!`);
} // end keepPlaying function

//THIS IS THE FISHER-YATES ALGORITHM
function shuffle(people) {
    for (let i = people.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      // swap elements array[i] and array[j] using 'destructuring assignment'
      [people[i], people[j]] = [people[j], people[i]];
    } // end for loop
  } // end shuffle function

function movePic() { // animation stretch goal
    $('#guessWho').animate({ //use jquery to animate the image
      left: '2000',
      height: '+=2500px',
      width: '+=4500px'
    }, function restart() { //created another function to restart/reset the animation
      $('#guessWho').removeAttr('style');
    }); // end animate method
  } // end moveCar 
