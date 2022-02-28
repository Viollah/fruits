const fruitNames = ["Grapes", "Melon", "Watermelon", "Tangerine", "Lemon", "Banana", "Pineapple", "Mango", "Red Apple"];
const fruits = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎"];

const fruitName = document.querySelector(".nameInput")
const fruitsIcon = document.querySelector(".IconInput")
const sortBtn = document.querySelector(".sort")
const searchBtn = document.querySelector(".search-button")
const searchValue = document.querySelector(".search")
const gettingNewFruitName = document.querySelector(".insertNewFruitName")
const gettingNewFruit = document.querySelector(".insertNewFruit")
const addingNewFruitNameToArray = document.querySelector(".adding")
const errorMessage = document.querySelector(".messages")

// get a reference to the template script tag
var templateSource = document.querySelector(".templateName").innerHTML;

// compile the template
var userTemplate = Handlebars.compile(templateSource);

// get a reference to the template script tag
var templateSourceFruit = document.querySelector(".templateIcon").innerHTML;

// compile the template
var userTemplateFruit = Handlebars.compile(templateSourceFruit);

fruitName.innerHTML = userTemplate({ fruitName: fruitNames})
fruitsIcon.innerHTML = userTemplateFruit({ icons: fruits })

// search
function search(){
  var txt = document.getElementById('txt').value;
  var index = fruitNames.indexOf(txt);
 
  if(index !==-1){
      alert('Exist');
     
  }else{
      alert(' Do Not Exist');
  }


}

document.getElementById('pgh').innerHTML=fruitNames;


function sortAlphabetically() {

  let sortedFruitNames = fruitNames.sort()

  fruitName.innerHTML = userTemplate({fruitName: sortedFruitNames})
  // fruitsIcon.innerHTML = userTemplateFruit({ icons: sortedFruitIcon })
}
sortBtn.addEventListener('click', sortAlphabetically)

function addingNewFruit() {
  const newFruits = gettingNewFruitName.value
  const newFruits2 = gettingNewFruit.value
  fruitName.innerHTML = userTemplate({fruitName: fruitNames})
  fruitNames[fruitNames.length]= newFruits;
  fruitsIcon.innerHTML = userTemplateFruit({ icons: fruits })
  fruits[fruits.length]= newFruits2;
}
addingNewFruitNameToArray.addEventListener('click', addingNewFruit)
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

