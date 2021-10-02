function attachEventsListeners() {
    document.getElementsByTagName('main')[0]
        .addEventListener('click', calculateOnClick);
    let daysElement = document.getElementById('days');
    let hoursElement = document.getElementById('hours');
    let minutesElement = document.getElementById('minutes');
    let secondsElement = document.getElementById('seconds');

    function calculateOnClick({target}) {
        if (target.type === 'button'){
            const timeType = target.parentElement.firstElementChild.htmlFor;
            const inputValue = Number(target.parentElement.children[1].value);

            switch (timeType){
                case 'days':{
                    hoursElement.value = inputValue * 24;
                    minutesElement.value = inputValue * 1440;
                    secondsElement.value = inputValue * 86400;
                    break;
                }
                case 'hours': {
                    daysElement.value = inputValue / 24;
                    minutesElement.value = inputValue * 60;
                    secondsElement.value = inputValue * 3600;
                    break;
                }
                case 'minutes': {
                    daysElement.value = inputValue / 1440;
                    hoursElement.value = inputValue / 60;
                    secondsElement.value = inputValue * 60;
                    break;
                }
                case 'seconds': {
                    daysElement.value = inputValue / 86400;
                    hoursElement.value = inputValue / 3600;
                    minutesElement.value = inputValue / 60;
                    break;
                }
            }
        }
    }
}