function attachEvents() {
    document.getElementById('submit')
        .addEventListener('click', getForecast);
    const locationInput = document.getElementById('location');
    const forecastDiv = document.getElementById('forecast');
    const currentDiv = document.getElementById('current');
    const upcomingDiv = document.getElementById('upcoming');

    async function getForecast() {
        try {
            const allLocationsData = await fetchAndReturnData(`http://localhost:3030/jsonstore/forecaster/locations`);
            const locationData = allLocationsData.find(l => l.name === locationInput.value);

            if (locationData === undefined) {
                throw new Error('Invalid location!');
            }

            const code = locationData.code;
            const conditionsData = await fetchAndReturnData
            (`http://localhost:3030/jsonstore/forecaster/today/${code}`);
            forecastDiv.style.display = '';
            //Current conditions
            const condition = conditionsData.forecast.condition;
            const weatherSymbol = getSymbol(condition);
            const lowHighTemp = `${conditionsData.forecast.low}°/${conditionsData.forecast.high}°`
            const forecastsDiv = createStructure('div', ['forecasts'],
                createStructure('span', ['condition', 'symbol'], weatherSymbol),
                createStructure('span', ['condition'],
                    createStructure('span', ['forecast-data'], conditionsData.name),
                    createStructure('span', ['forecast-data'], lowHighTemp),
                    createStructure('span', ['forecast-data'], condition)
                )
            );
            currentDiv.appendChild(forecastsDiv);
            //3-day forecast
            const threeDayForecastData = await fetchAndReturnData(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`);
            const  threeDayForecastDiv = createStructure('div', ['forecast-info']);

            threeDayForecastData.forecast.forEach(f => {
                const lowHighTemp = `${f.low}°/${f.high}°`;
                const condition = f.condition;
                const weatherSymbol = getSymbol(condition);
                const forecastSpan = createStructure('span', ['upcoming'],
                    createStructure('span', ['symbol'], weatherSymbol),
                    createStructure('span', ['forecast-data'], lowHighTemp),
                    createStructure('span', ['forecast-data'], condition)
                );
                threeDayForecastDiv.appendChild(forecastSpan);
            });
            upcomingDiv.appendChild(threeDayForecastDiv);
        } catch (error) {
            alert(error.message);
        }

    }

    function getSymbol(weatherSymbol) {
        const symbolSwitch = {
            'Sunny': () => '\u2600',
            'Partly sunny': () => '\u26C5',
            'Overcast': () => '\u2601',
            'Rain': () => '\u2614'
        };

        return(symbolSwitch[weatherSymbol])();
    }

    function createStructure(type, elClasses, ...content) {
        const element = document.createElement(type);

        if (elClasses.length > 0) {
            elClasses.forEach(c => element.classList.add(c));
        }

        for (let item of content) {
            if (typeof item === 'string') {
                item = document.createTextNode(item);
            }

            element.appendChild(item);
        }

        return element;
    }

    async function fetchAndReturnData(url) {
        try {
            let response = await fetch(url);

            if (response.status !== 200) {
                throw new Error('Error');
            }
            return await response.json();

        } catch (error) {
            throw error;
        }
    }
}

attachEvents();