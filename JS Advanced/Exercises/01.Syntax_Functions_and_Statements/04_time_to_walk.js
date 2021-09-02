function calculateTheNeededTimeToWalkToUni(stepsToUni, footprintLengthInMeters, kmPerSecond) {

    let totalDistanceInMeters = stepsToUni * footprintLengthInMeters;
    let breaksCount = Math.trunc(totalDistanceInMeters / 500);
    let allBreaksInSeconds = breaksCount * 60;
    let metersPerSecond = kmPerSecond * 0.277777778;
    let neededTimeToWalkToUniInSeconds = (totalDistanceInMeters / metersPerSecond) + allBreaksInSeconds;
    let time = new Date('2020-02-09 00:00:00');
    time.setSeconds(neededTimeToWalkToUniInSeconds);

    function covertToString(numberAsInt) {
        let numberAsString;

        if (numberAsInt == 0) {
            numberAsString = '00';
        } else if (numberAsInt > 1 && numberAsInt < 9) {
            numberAsString = `0${numberAsInt}`;
        } else {
            numberAsString = String(numberAsInt);
        }

        return numberAsString;
    }

    let hourAsString = covertToString(time.getHours());
    let minutesAsString = covertToString(time.getMinutes());
    let secondsAsString = covertToString(time.getSeconds() + 1);

    console.log(`${hourAsString}:${minutesAsString}:${secondsAsString}`);
}