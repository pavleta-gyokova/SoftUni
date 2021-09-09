function attachEvents() {
  
    const getWeatherBtn = document.getElementById('submit');
    getWeatherBtn.addEventListener('click', getWeather);
}
attachEvents();


async function getWeather () {
    const input = document.getElementById('location');
    const cityName = input.value;
    const code = await getCode(cityName);
    const [current,upcoming] = await Promise.all([
        getCurrent(code),
        getUpcoming(code)
    ]);
    
    const weatherMap  = {
        Sunny : '&#9728;',
        'Partly sunny' : '&#x26C5;',
        Overcast : '&#x2601;',
        Rain : '&#x2614;',
        Degrees : '&#176;'
    }
    const currentCondition = document.getElementById('current');
    
    
    const weatherElement = document.getElementById('forecast');
    weatherElement.style.display = 'inline';
        const result = e('div',{className : 'forecasts'},
        e('span',{className : 'condition symbol'},weatherMap[current.forecast.condition]),
        e('span',{className : 'condition'},
                e('span',{className : 'forecast-data'}, current.name ),
                e('span',{className : 'forecast-data'},`${current.forecast.low} ${weatherMap.Degrees}/${current.forecast.high} ${weatherMap.Degrees}`),
                e('span',{className : 'forecast-data'}, current.forecast.condition)));

    currentCondition.appendChild(result);

}



async function getCode (location) {
    const url = 'http://localhost:3030/jsonstore/forecaster/locations';
    const response = await fetch(url);
    const data = await response.json();
    return data.find(x => x.name.toLowerCase() === location.toLowerCase()).code;
    

}
async function getCurrent (code) {
    const url = 'http://localhost:3030/jsonstore/forecaster/today/' + code;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function getUpcoming (code) {
    const url = 'http://localhost:3030/jsonstore/forecaster/upcoming/' + code;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}

