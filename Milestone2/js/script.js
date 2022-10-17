
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

// Conditional statement for images visualization
for(let i = 0; i < imagesArray.length; i++){

  imagesTags += `
    <img src="img/${imagesArray[i]}" alt="${imagesArray[i]}" class="item">
  `;
}

let counterImages = 0;

// buttons
const next = document.querySelector(".down");
const previous = document.querySelector(".up");
previous.classList.add("hide")

//imageTags
itemsWrapper.innerHTML = imagesTags;

const items = document.getElementsByClassName("item");

items[counterImages].classList.add("active");

//FUNCTION CLICK CHANGE IMG
next.addEventListener("click", function(){
  items[counterImages].classList.remove("active");
  items[++counterImages].classList.add("active");

  previous.classList.remove("hide");
  if(counterImages === imagesArray.length -1){
    next.classList.add("hide");
  }
});

previous.addEventListener("click", function(){
  items[counterImages].classList.remove("active");
  items[--counterImages].classList.add("active");

  next.classList.remove("hide");
  if(counterImages === 0){
    previous.classList.add("hide");
  }
});