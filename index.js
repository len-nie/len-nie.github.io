const apiKey = 'apiKey=7e9a643ae4464591b0b4b1bd2491776b';
const baseUrl = `https://api.spoonacular.com/recipes/complexSearch?${apiKey}`;
const search = document.querySelector('#searchInput');
const form = document.querySelector('form');

function displayText() {
	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const inputValue = e.target.searchInput.value;

		fetchRecipes(inputValue);
	});
}

async function fetchRecipes(query) {
	const response = await fetch(`${baseUrl}&query=${rice}`);
	const jsonData = await response.json();

	console.log(jsonData);
}


document.addEventListener("DOMContentLoaded", function(){
    const url = "http://localhost:3000/recipes/complexSearch"
})

const recipeTitles = document.querySelectorAll('.recipe-title');

recipeTitles.forEach((title) => {
    title.addEventListener('click', (event) => {
        // handle the click event
    });
});

const recipeImages = document.querySelectorAll('.recipe-image');

recipeImages.forEach((image) => {
    image.addEventListener('mouseover', (event) => {
        // handle the mouseover event
    });
});

const recipeList = document.querySelector('.recipe-list');

recipeList.addEventListener('scroll', (event) => {
    // handle the scroll event
});