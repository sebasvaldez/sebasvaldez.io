const moon = document.getElementById("moon");
const moonIcon = document.getElementById("moon-icon");
const colores = document.getElementById("colores");



const rootStyles = document.documentElement.style;

moon.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (moonIcon.src.includes("moon.svg")) {
    moonIcon.src = "assets/icons/moon-fill.svg";
    document.getElementById("text-color").style.color="white";
    document.getElementById("text-color1").style.color="white";
    document.getElementById("text-color2").style.color="white";
    document.getElementById("text-color3").style.color="white";

    document.getElementById
    
  } else {
    moonIcon.src = "assets/icons/moon.svg";
    document.getElementById("text-color").style.color="black";
    document.getElementById("text-color1").style.color="black";
    document.getElementById("text-color2").style.color="black";
    document.getElementById("text-color3").style.color="black";
  }
});

colores.addEventListener("click", (e)=>{
    rootStyles.setProperty("--primary-color", e.target.dataset.color);
})



