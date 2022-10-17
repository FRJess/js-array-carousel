console.log("ARRAYCAROUSEL");

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

for(let i = 0; i < imagesArray.length; i++){

  imagesTags += `
    <img src="img/${imagesArray[i]}" alt="${imagesArray[i]}" class="item">
  `;
}

let counterImages = 0;

const next = document.querySelector(".down");
const previous = document.querySelector(".up");
previous.classList.add("hide")

itemsWrapper.innerHTML = imagesTags;

console.log('imagesTags', imagesTags)

const items = document.getElementsByClassName("item");

items[counterImages].classList.add("active");

next.addEventListener("click", function(){
  items[counterImages].classList.remove("active");
  items[++counterImages].classList.add("active");
  previous.classList.remove("hide")
});

previous.addEventListener("click", function(){
  items[counterImages].classList.remove("active");
  items[--counterImages].classList.add("active");
  console.log("PREV");
});