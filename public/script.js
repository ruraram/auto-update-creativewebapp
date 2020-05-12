// client-side js, loaded by index.html
// run by the browser each time the page is loaded

console.log("hello world :o");

// define variables that reference elements on our page


const festsList = document.getElementById("fests");

function appendNewFest(fest) {
  const newListItem = document.createElement("input");
  newListItem.src = fest[1];
  newListItem.type="image";
  newListItem.onclick="https://www.asos.com/women/";
  //logo.setAttribute("src", "https://cdn.glitch.com/0eac1b7f-36d6-47d9-9e09-471cbcc4ebc9%2Fparklifelogo.jpg?v=1589236232049");
  festsList.appendChild(newListItem);
}

fetch("/fests")
  .then(response => response.json()) // parse the JSON from the server
  .then(fests => {
    // remove the loading text
    festsList.firstElementChild.remove();
    // iterate through every dream and add it to our page
    fests.forEach(appendNewFest);
});


