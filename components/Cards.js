// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

// const cardContainer = document.querySelector(".cards-container");

//data sample
/*
"articles": {
    "javascript": [
{
    "id": "b6fa0928-e83e-4c9c-8dee-b5bb400dcd34",
    "headline": "ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects",
    "authorPhoto": "https://tk-assets.lambdaschool.com/08d1372e-e393-47f1-ac44-fcb7d0baf0e2_sir.jpg",
    "authorName": "SIR RUFF'N'STUFF"
},
*/



//     //axios data request
// axios.get("https://lambda-times-api.herokuapp.com/articles")
// .then(function(response) {
//     console.log(response);

// const 


    //create elements
const articleCard = function(article) {

const articleCard = document.createElement("div");
const articleTitle = document.createElement("div");
const articleAuthor = document.createElement("div");
const articleImgContainer = document.createElement("div");
const articleImg = document.createElement("img");
const authorName = document.createElement("span");


    //add classes/attributs/src
articleCard.classList.add("card");
articleTitle.classList.add("headline");
articleAuthor.classList.add("author");
articleImgContainer.classList.add("img-container");


    //add event listner
articleCard.addEventListener("click", function() {
    console.log(article.headline);
});


    //attach elements - structure
articleCard.append(articleTitle);
articleCard.append(articleAuthor);
articleAuthor.append(articleImgContainer);
articleImgContainer.append(articleImg);
articleAuthor.append(authorName);

