const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const citiesData = [];

const searchInput = document.querySelector('.search');

const suggestions = document.querySelector('.suggestions');

fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
.then(response => response.json())
.then(data =>
    citiesData.push(...data)
);

function findMatches(searchTerm, citiesArray) {
    const regex = new RegExp(`^${searchTerm}`, "gi"); //Changer le this.value //
    const matches = citiesArray.filter(place => {
        return place.city.match(regex) || place.state.match(regex);
    });
    return matches; 
}

function numberWithCommas (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");  
}

function displayMatches() {
    const matches = findMatches(searchInput.value, citiesData);
    matches.sort((a, b) => a.city.localeCompare(b.city)); // Ajout //
    const html = matches.map(place => {
        const regex = new RegExp(this.value, "gi");
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `<li>${cityName}, ${stateName}, ${numberWithCommas(place.population)} </li>` // Ajout Population
    }).join('');
    suggestions.innerHTML = html;
    
}


searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

