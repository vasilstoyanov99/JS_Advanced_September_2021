function getMessageFromRadar(driverSpeed, area) {

    let message;

    switch (area) {
        case 'motorway':
            message = getMessage(driverSpeed, 130);
            break;
        case 'interstate':
            message = getMessage(driverSpeed, 90);
            break;
        case 'city':
            message = getMessage(driverSpeed, 50);
            break;
        case 'residential':
            message = getMessage(driverSpeed, 20);
            break;

    }

    console.log(message);

    function getMessage(driverSpeed, speedLimit) {

        let message;

        if (driverSpeed <= speedLimit) {
            message = `Driving ${driverSpeed} km/h in a ${speedLimit} zone`;
        } else {
            let overTheLimit = driverSpeed - speedLimit;
            let status;

            if (overTheLimit <= 20) {
                status = 'speeding';
            } else if (overTheLimit > 20 && overTheLimit <= 40) {
                status = 'excessive speeding';
            } else if (overTheLimit > 40) {
                status = 'reckless driving';
            }

            message = `The speed is ${overTheLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`;
        }

        return message;
    }
}