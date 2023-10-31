// Code your solutions in this file
function writeCards(names, eventName) {
    return names.map(name => `Thank you, ${name}, for the wonderful ${eventName} gift!`);
}

// Example usage:
const namesArray = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";

const thankYouMessages = writeCards(namesArray, event);
console.log(thankYouMessages);


function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}



console.log(thankYouMessages);

countDown(5);
