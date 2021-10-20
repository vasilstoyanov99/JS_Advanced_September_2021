function solveClasses () {
    class Pet {
        constructor(ownerInput, nameInput) {
            this.owner = ownerInput;
            this.name = nameInput;
            this.comments = [];
        }

        addComment(newComment) {
            if (this.comments.includes(newComment)) {
                return 'This comment is already added!';
            }

            this.comments.push(newComment);

            return 'Comment is added.';
        }

        feed() {
            return `${this.name} is fed`;
        }

        toString() {
            let result = `Here is ${this.owner}'s pet ${this.name}.`;

            if (this.comments.length > 0) {
                result += `\nSpecial requirements: ${this.comments.join(', ')}`;
            }

            return result;
        }
    }

    class Cat extends Pet {
        constructor(ownerInput, nameInput, insideHabitsInput, scratchingInput) {
            super(ownerInput, nameInput);
            this.insideHabits = insideHabitsInput;
            this.scratching = scratchingInput;
        }

        feed() {
            return super.feed() + ', happy and purring.';
        }

        toString() {
            let result = super.toString();
            result += `\nMain information:\n${this.name} is a cat with ${this.insideHabits}`;

            if (this.scratching) {
                result += ', but beware of scratches.';
            }

            return result;
        }
    }

    class Dog extends Pet {
        constructor(ownerInput, nameInput, runningNeedsInput, trainabilityInput) {
            super(ownerInput, nameInput);
            this.runningNeeds = runningNeedsInput;
            this.trainability = trainabilityInput;
        }

        feed() {
            return super.feed() + ', happy and wagging tail.';
        }

        toString() {
            let result = super.toString();
            result += `\nMain information:\n${this.name} is a dog with need of ${this.runningNeeds}km running every day and ${this.trainability} trainability.`;

            return result;
        }
    }

    return { Pet, Cat, Dog }
}

let classes = solveClasses();
let pet = new classes.Pet('Ann', 'Merry');
console.log(pet.addComment('likes bananas'));
console.log(pet.addComment('likes sweets'));
console.log(pet.feed());
console.log(pet.toString());
console.log('-'.repeat(20));
let cat = new classes.Cat('Jim', 'Sherry', 'very good habits', true);
console.log(cat.addComment('likes to be brushed'));
console.log(cat.addComment('sleeps a lot'));
console.log(cat.feed());
console.log(cat.toString());
console.log('-'.repeat(20));
let dog = new classes.Dog('Susan', 'Max', 5, 'good');
console.log(dog.addComment('likes to be brushed'));
console.log(dog.addComment('sleeps a lot'));
console.log(dog.feed());
console.log(dog.toString());
console.log('-'.repeat(20));