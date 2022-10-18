
// VARIABLES DECLARATION AND INITIALIZATION
const imagesArray = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
];
//add images to html file
const itemsWrapper = document.querySelector(".items-wrapper");
let imagesTags = " ";
let counterImages = 0;
// buttons
const next = document.querySelector(".down");
const previous = document.querySelector(".up");
const items = document.getElementsByClassName("item");

// Conditional statement for images visualization
for(let i = 0; i < imagesArray.length; i++){

  imagesTags += `
    <img src="img/${imagesArray[i]}" alt="${imagesArray[i]}" class="item">
  `;
}

previous.classList.add("hide")

//imageTags
itemsWrapper.innerHTML = imagesTags;

items[counterImages].classList.add("active");

//FUNCTION CLICK CHANGE NEXT IMG
next.addEventListener("click", function(){

  //active class change
  items[counterImages].classList.remove("active");
  items[++counterImages].classList.add("active");

  // LOOP INFINITO NON FUNZIONA
  // if(counterImages === imagesArray.length -1) counterImages = -1;
  // items[counterImages].classList.add("active");

  //hide class change
  previous.classList.remove("hide");
  if(counterImages === imagesArray.length -1){
    next.classList.add("hide");
  }
});

//FUNCTION CLICK CHANGE PREVIOUS IMG
previous.addEventListener("click", function(){

  //active class change
  items[counterImages].classList.remove("active");
  items[--counterImages].classList.add("active");

  //hide class change
  next.classList.remove("hide");
  if(counterImages === 0){
    previous.classList.add("hide");
  }
});