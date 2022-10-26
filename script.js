
const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");
const mycards=document.querySelector(".mycards");


readMoreBtn.addEventListener("click", function(){
  text.classList.toggle("show-more");
  if (readMoreBtn.innerHTML === "Read More") {
    readMoreBtn.innerHTML = "Read Less";
  } else {
    readMoreBtn.innerHTML= "Read More";
  }
});