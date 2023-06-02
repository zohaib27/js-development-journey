function bullshit() {
    console.log("Welcome to the Guessing Game!");
    console.log("I have chosen a number between 1 and 100. Can you guess it?");
    
    var secretNumber = Math.floor(Math.random() * 100) + 1;
    var attempts = 0;
    
    while (true) {
        var guess = parseInt(prompt("Enter your guess:"));
        
        if (isNaN(guess)) {
            console.log("Invalid input. Please enter a valid number.");
            continue;
        }
        
        attempts++;
        
        if (guess < secretNumber) {
            console.log("Too low! Try again.");
        } else if (guess > secretNumber) {
            console.log("Too high! Try again.");
        } else {
            console.log("Congratulations! You guessed the number in " + attempts + " attempts.");
            break;
        }
    }
}

bullshit();

console.log(Math.random() * 1);
console.log(Math.random() * 10);
console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 100));


