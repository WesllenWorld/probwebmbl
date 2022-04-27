let btn = document.getElementById("mostrar-aprendendo");
let div = document.getElementById("div-aprendendo");

btn.addEventListener("click", () => {
  if (div.style.display !== "none") {
    div.style.display = "none";
  } else {
    div.style.display = "block";
  }
})