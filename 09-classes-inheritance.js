/**
 * Assignment 9: Classes and Inheritance
 * Fill in the placeholders to complete the code
 * Test this code in your browser console
 */

/**
 * Assignment 9: Classes and Inheritance
 * Test this code in your browser console
 */

// ✅ Define a base class
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
        this.isAlive = true;
    }

    // ✅ Instance method
    speak() {
        return `${this.name} makes a sound`;
    }

    // ✅ Method with parameters
    eat(food) {
        return `${this.name} is eating ${food}`;
    }

    // ✅ Static method
    static getKingdom() {
        return 'Animalia';
    }

    // ✅ Getter
    get info() {
        return `${this.name} is a ${this.species}`;
    }

    // ✅ Setter
    set alive(status) {
        this.isAlive = Boolean(status);
    }
}

// ✅ Derived class using inheritance
class Dog extends Animal {
    constructor(name, breed) {
        super(name, 'Canine'); // Call parent constructor
        this.breed = breed;
        this.tricks = [];
    }

    // ✅ Override parent method
    speak() {
        return `${this.name} barks: Woof!`;
    }

    // ✅ New method specific to Dog
    learnTrick(trick) {
        this.tricks.push(trick);
        return `${this.name} learned ${trick}!`;
    }

    performTrick() {
        if (this.tricks.length === 0) {
            return `${this.name} doesn't know any tricks yet`;
        }
        const randomTrick = this.tricks[Math.floor(Math.random() * this.tricks.length)];
        return `${this.name} performs ${randomTrick}!`;
    }
}

// ✅ Another derived class
class Cat extends Animal {
    constructor(name, isIndoor = true) {
        super(name, 'Feline');
        this.isIndoor = isIndoor;
        this.livesLeft = 9;
    }

    speak() {
        return `${this.name} meows: Meow!`;
    }

    // ✅ Method with default parameter
    hunt(prey = 'mouse') {
        if (this.isIndoor) {
            return `${this.name} pretends to hunt a toy ${prey}`;
        }
        return `${this.name} hunts a real ${prey}`;
    }

    // ✅ Getter and Setter
    get livesRemaining() {
        return this.livesLeft;
    }

    set livesRemaining(lives) {
        if (lives >= 0 && lives <= 9) {
            this.livesLeft = lives;
        }
    }
}

// ✅ Class with private fields (modern JavaScript)
class BankAccount {
    // ✅ Private field
    #balance = 0;

    constructor(accountHolder, initialBalance = 0) {
        this.accountHolder = accountHolder;
        this.#balance = Math.max(0, initialBalance);
    }

    // ✅ Private method
    #validateAmount(amount) {
        return typeof amount === 'number' && amount > 0;
    }

    deposit(amount) {
        if (this.#validateAmount(amount)) {
            this.#balance += amount;
            return `Deposited $${amount}. New balance: $${this.#balance}`;
        }
        return 'Invalid deposit amount';
    }

    withdraw(amount) {
        if (this.#validateAmount(amount) && amount <= this.#balance) {
            this.#balance -= amount;
            return `Withdrew $${amount}. New balance: $${this.#balance}`;
        }
        return 'Invalid withdrawal amount or insufficient funds';
    }

    get balance() {
        return this.#balance;
    }
}

// ✅ Test the classes
console.log('Testing Classes and Inheritance:');

// ✅ Test Animal class
const genericAnimal = new Animal('Generic', 'Unknown');
console.log(genericAnimal.speak());
console.log(genericAnimal.eat('food'));
console.log(genericAnimal.info);
console.log('Kingdom:', Animal.getKingdom());

// ✅ Test Dog class
const dog = new Dog('Buddy', 'Golden Retriever');
console.log(dog.speak());
console.log(dog.info);
console.log(dog.learnTrick('sit'));
console.log(dog.learnTrick('roll over'));
console.log(dog.performTrick());

// ✅ Test inheritance
console.log('Is dog an instance of Animal?', dog instanceof Animal);
console.log('Is dog an instance of Dog?', dog instanceof Dog);

// ✅ Test Cat class
const cat = new Cat('Whiskers', false);
console.log(cat.speak());
console.log(cat.hunt());
console.log(cat.hunt('bird'));
console.log('Lives remaining:', cat.livesRemaining);
cat.livesRemaining = 8;
console.log('Lives after accident:', cat.livesRemaining);

// ✅ Test BankAccount with private fields
const account = new BankAccount('John Doe', 1000);
console.log(account.deposit(500));
console.log(account.withdraw(200));
console.log(account.withdraw(2000)); // Should fail
console.log('Final balance:', account.balance);

// ❌ Try to access private field (should cause error)
// console.log('Direct access to #balance:', account.#balance); // Uncommenting this will throw SyntaxError
