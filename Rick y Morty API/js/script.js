"use strict"

const charactersContainer = document.querySelector('#characters-container');

fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        const characters = data.results;

        characters.forEach( character => {
            // console.log(`Name: ${character.name}, Status: ${character.status}, Species: ${character.species}`);
            const characterElement = document.createElement('div');
            characterElement.className = "card";
            characterElement.innerHTML =
                `<img src="${character.image}" alt="${character.name}" class="character-image">
                <p class="character-detail"> <span class="attribute"> Name:  </span> ${character.name} </p>
                <p class="character-detail"> <span class="attribute"> Status:</span> ${character.status} </p>
                <p class="character-detail"> <span class="attribute"> Species</span> ${character.species} </p>`;
            charactersContainer.appendChild(characterElement);
        });
    })
    .catch(error => {
        console.log('Hubo un error:', error);
    });