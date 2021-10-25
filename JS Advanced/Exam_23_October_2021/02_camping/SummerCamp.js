class SummerCamp {
    constructor(organizerInput, locationInput) {
        this.organizer = organizerInput;
        this.location = locationInput;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];
    }

    registerParticipant (name, condition, money) {
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        const foundParticipant = this.listOfParticipants.find(p => p.name === name);

        if (foundParticipant !== undefined) {
            return `The ${name} is already registered at the camp.`;
        }

        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`
        }

        const newParticipant = {
            name,
            condition,
            power: 100,
            wins: 0
        };

        this.listOfParticipants.push(newParticipant);

        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant (name) {
        const foundParticipant = this.listOfParticipants.find(p => p.name === name);

        if (foundParticipant === undefined) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        this.listOfParticipants = this.listOfParticipants.filter(p => {
            if (p.name !== name) {
                return p;
            }
        });

        return `The ${name} removed successfully.`
    }

    timeToPlay (typeOfGame, participant1, participant2) {
        if (typeOfGame === 'WaterBalloonFights') {
            const p1 = validateParticipant(participant1, this.listOfParticipants);
            const p2 = validateParticipant(participant2, this.listOfParticipants);

            if (p1.condition !== p2.condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            const p1Power = p1.power;
            const p2Power = p2.power;

            if (p1Power > p2Power) {
                p1.wins++;
                return `The ${participant1} is winner in the game ${typeOfGame}.`;
            } else if (p1Power < p2Power) {
                p2.wins++;
                return `The ${participant2} is winner in the game ${typeOfGame}.`;
            } else {
                return `There is no winner.`;
            }
        } else if (typeOfGame === 'Battleship') {
            const p = validateParticipant(participant1, this.listOfParticipants);
            p.power += 20;

            return `The ${participant1} successfully completed the game ${typeOfGame}.`;
        }

        function validateParticipant(name, listOfParticipants) {
            const foundParticipant = listOfParticipants.find(p => p.name === name);

            if (foundParticipant === undefined) {
                throw new Error(`Invalid entered name/s.`);
            }

            return foundParticipant;
        }
    }

    toString() {
        const result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);
        this.listOfParticipants.sort((a, b) => {
            return b.wins - a.wins;
        });
        this.listOfParticipants.forEach(p => {
            result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`);
        });

        return result.join('\n');
    }
}

