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
    //console.log(person);
    if (people[randomIndex].name == person) {
        alert('YAAAAS! You got it!');
    } else {
        alert('You did NOT guess who!');
    } // end conditional 
} // end isItThem function

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
} // end randomNumber function

function keepPlaying() {
    randomIndex = randomNumber(min, max);
    alert(`Choose ${people[randomIndex].name}!`);
} // end keepPlaying function