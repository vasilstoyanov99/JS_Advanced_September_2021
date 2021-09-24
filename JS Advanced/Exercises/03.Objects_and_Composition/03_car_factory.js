function addSpecsToCar(car) {

    let power = 0;
    let volume = 0;

    if (car.power <= 90){
        power = 90;
        volume = 1800;
    } else if(car.power <= 120){
        power = 120;
        volume = 2400;
    } else if(car.power <= 200){
        power = 200;
        volume = 3500;
    }

    delete car.power;
    car.engine = { power: power, volume: volume };

    let carriageType = car.carriage;
    delete car.carriage;
    car.carriage = { type: carriageType, color: car.color};
    delete car.color;

    let wheelSize = Math.floor(car.wheelsize);
    delete car.wheelsize;
    if (wheelSize % 2 === 0){
        wheelSize--;
    }
    car.wheels = [wheelSize, wheelSize, wheelSize, wheelSize];

    return car;
}