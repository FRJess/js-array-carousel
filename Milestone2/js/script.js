const imagesArray = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
];

let imagesTags = " ";

const slider = document.querySelector(".items-wrapper");

for(let i = 0; i < imagesArray.lenght; i++){

  imagesTags += `
    <img class="item" src="img/${imagesArray[i]}" alt="${imagesArray[i]}">
  `;
}

let counterImages = 0;

const next = document.querySelector(".down");
const previous = document.querySelector(".up");

slider.innerHTML += imagesTags;

const items = document.getElementsByClassName("item");

items[counterImages].classList.add("active");

next.addEventListener("click", function(){
  items[counterImages].classList.remove("active");
  counterImages++;
  items[counterImages].classList.add("active");
  console.log(counterImages);
});

previous.addEventListener("click", function(){
  items[counterImages].classList.remove("active");
  items[--counterImages].classList.add("active");
  console.log("PREV");
});