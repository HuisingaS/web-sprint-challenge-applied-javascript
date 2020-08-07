// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
  

function createHeader() {
        //create elements
const headerDiv = document.createElement("div");
const headerDate = document.createElement("span");
const headerTitle = document.createElement("h1");
const headerTemp = document.createElement("span");

        //add classes/attributs/src
headerDiv.classList.add("header");
headerDate.classList.add("date");
headerTemp.classList.add("temp");
  
        //insert text
headerDate.textContent = "MARCH 28, 2020";
headerTitle.textContent = "Lambda Times";
headerTemp.textContent = "98°";

        //attach it
headerDiv.append(headerDate);
headerDiv.append(headerTitle);
headerDiv.append(headerTemp);

        //return assembly
return headerDiv;

}


const headerContainer = document.querySelector(".header-container");
headerContainer.append(createHeader());