function createAssemblyLine() {

    return {
        hasClima: (car) => {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = () => {
                if (car.temp < car.tempSettings) {
                    car.temp++;
                } else if (car.temp > car.tempSettings) {
                    car.temp--;
                }
            };
        },
        hasAudio: (car) => {
            car.currentTrack = { name: '', artist: '' };
            car.nowPlaying = () => {
                if (car.currentTrack !== null) {
                    console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`);
                }
            };
        },
        hasParktronic: (car) => {
            car.checkDistance = (distance) => {
                let message = '';

                if (distance < 0.1) {
                    message = 'Beep! Beep! Beep!';
                } else if (distance >= 0.1 && distance < 0.25) {
                    message = 'Beep! Beep!';
                } else if (distance >= 0.25 && distance < 0.5) {
                    message = 'Beep!';
                }

                console.log(message);
            };
        }
    };
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);
