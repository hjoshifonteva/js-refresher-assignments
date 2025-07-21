/**
 * Assignment 9: Classes and Inheritance
 * Fill in the placeholders to complete the code
 * Test this code in your browser console
 */

// TODO: Define a base class
/* PLACEHOLDER */ Animal {
    /* PLACEHOLDER */(name, species) {
        this.name = /* PLACEHOLDER */;
        this.species = species;
        this.isAlive = true;
    }

    // TODO: Define instance method
    speak() {
        return /* PLACEHOLDER */`${this.name} makes a sound`;
    }

    // TODO: Define method with parameters
    eat(food) {
        return `${/* PLACEHOLDER */} is eating ${food}`;
    }

    // TODO: Static method
    /* PLACEHOLDER */ getKingdom() {
        return 'Animalia';
    }

    // TODO: Getter
    get info() {
        return /* PLACEHOLDER */`${this.name} is a ${this.species}`;
    }

    // TODO: Setter
    set alive(status) {
        this./* PLACEHOLDER */ = Boolean(status);
    }
}

// TODO: Create a derived class using inheritance
class Dog /* PLACEHOLDER */ Animal {
    constructor(name, breed) {
        /* PLACEHOLDER */(name, 'Canine'); // Call parent constructor
        this.breed = /* PLACEHOLDER */;
        this.tricks = [];
    }

    // TODO: Override parent method
    speak() {
        return /* PLACEHOLDER */`${this.name} barks: Woof!`;
    }

    // TODO: Add new method specific to Dog
    learnTrick(trick) {
        this.tricks./* PLACEHOLDER */(trick);
        return `${this.name} learned ${trick}!`;
    }

    performTrick() {
        if (this.tricks.length === 0) {
            return `${this.name} doesn't know any tricks yet`;
        }
        const randomTrick = this.tricks[Math.floor(Math.random() * this.tricks.length)];
        return /* PLACEHOLDER */`${this.name} performs ${randomTrick}!`;
    }
}

// TODO: Create another derived class
class Cat extends /* PLACEHOLDER */ {
    constructor(name, isIndoor = true) {
        super(/* PLACEHOLDER */, 'Feline');
        this.isIndoor = isIndoor;
        this.livesLeft = 9;
    }

    speak() {
        return `${/* PLACEHOLDER */} meows: Meow!`;
    }

    // TODO: Method with default parameter
    hunt(prey = 'mouse') {
        if (this.isIndoor) {
            return /* PLACEHOLDER */`${this.name} pretends to hunt a toy ${prey}`;
        }
        return `${this.name} hunts a real ${prey}`;
    }

    // TODO: Use getter and setter
    get livesRemaining() {
        return /* PLACEHOLDER */livesLeft;
    }

    set livesRemaining(lives) {
        if (lives >= 0 && lives <= 9) {
            this.livesLeft = /* PLACEHOLDER */;
        }
    }
}

// TODO: Class with private fields (modern JavaScript)
class BankAccount {
    // TODO: Private field
    /* PLACEHOLDER */balance = 0;

    constructor(accountHolder, initialBalance = 0) {
        this.accountHolder = accountHolder;
        this.#balance = Math.max(0, /* PLACEHOLDER */);
    }

    // TODO: Private method
    /* PLACEHOLDER */validateAmount(amount) {
        return typeof amount === 'number' && amount > 0;
    }

    deposit(amount) {
        if (this.#validateAmount(/* PLACEHOLDER */)) {
            this.#balance += amount;
            return `Deposited $${amount}. New balance: $${this.#balance}`;
        }
        return 'Invalid deposit amount';
    }

    withdraw(amount) {
        if (this./* PLACEHOLDER */(amount) && amount <= this.#balance) {
            this.#balance -= /* PLACEHOLDER */;
            return `Withdrew $${amount}. New balance: $${this.#balance}`;
        }
        return 'Invalid withdrawal amount or insufficient funds';
    }

    get balance() {
        return this./* PLACEHOLDER */;
    }
}

// Test the classes
console.log('Testing Classes and Inheritance:');

// Test Animal class
const genericAnimal = new /* PLACEHOLDER */('Generic', 'Unknown');
console.log(genericAnimal.speak());
console.log(genericAnimal.eat('food'));
console.log(genericAnimal.info);
console.log('Kingdom:', Animal.getKingdom());

// Test Dog class
const dog = new /* PLACEHOLDER */('Buddy', 'Golden Retriever');
console.log(dog.speak());
console.log(dog.info);
console.log(dog.learnTrick('sit'));
console.log(dog.learnTrick('roll over'));
console.log(dog.performTrick());

// Test inheritance
console.log('Is dog an instance of Animal?', dog /* PLACEHOLDER */ Animal);
console.log('Is dog an instance of Dog?', dog instanceof /* PLACEHOLDER */);

// Test Cat class
const cat = new Cat(/* PLACEHOLDER */, false);
console.log(cat.speak());
console.log(cat.hunt());
console.log(cat.hunt('bird'));
console.log('Lives remaining:', cat.livesRemaining);
cat.livesRemaining = 8;
console.log('Lives after accident:', cat./* PLACEHOLDER */);

// Test BankAccount with private fields
const account = new /* PLACEHOLDER */('John Doe', 1000);
console.log(account.deposit(500));
console.log(account.withdraw(200));
console.log(account.withdraw(2000)); // Should fail
console.log('Final balance:', account.balance);

// Try to access private field (should be undefined)
console.log('Direct access to #balance:', account.#balance); // This will cause an error
