const citiesData = [];

const searchInput = document.querySelector('.search');

const suggestionList = document.querySelector('.suggestion');

fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
.then(response => response.json())
.then(data => {
    citiesData = data;
});

function findMatches(searchTerm, citiesArray) {
    const regex = new RegExp(this.value, "gi");
    const matches = citiesArray.filter(place => {
        return place.city.match(regex) || place.state.match(regex);
    });
    return matches; 
}

