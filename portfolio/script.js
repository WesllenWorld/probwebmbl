let btn = document.getElementById("mostrar-aprendendo");
let div = document.getElementById("div-aprendendo");

btn.addEventListener("click", () => {
  div.classList.toggle('hide');
})