const btnburger = document.getElementById("btn-burger");
const landing = document.getElementsByClassName("landing")[0];


btnburger.addEventListener("click",()=>{
    landing.classList.toggle("active");
});
