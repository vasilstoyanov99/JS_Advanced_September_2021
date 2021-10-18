function solve() {
    class Balloon {
        constructor(colorInput, hasWeightInput) {
            this.color = colorInput;
            this.hasWeight = hasWeightInput;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(colorInput, hasWeightInput,
                    ribbonColorInput, ribbonLengthInput) {
            super(colorInput, hasWeightInput);
            this._ribbon = {
                color: ribbonColorInput,
                length: ribbonLengthInput
            };
        }

        get ribbon() {
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(colorInput, hasWeightInput,
                    ribbonColorInput, ribbonLengthInput, textInput) {
            super(colorInput, hasWeightInput,
                ribbonColorInput, ribbonLengthInput);
            this._text = textInput;
        }

        get text() {
            return this._text;
        }
    }

    return {
        Balloon, PartyBalloon, BirthdayBalloon
    }
}