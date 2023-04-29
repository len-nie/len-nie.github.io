fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=7e9a643ae4464591b0b4b1bd2491776b&query=pasta&cuisine=italian&maxFat=25&number=10')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

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