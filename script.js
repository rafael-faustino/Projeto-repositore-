
const entrarBtn = document.getElementById("entrarBtn");
const capa = document.getElementById("capa");
const site = document.getElementById("site");
const aranha = document.getElementById("aranha");
const fio = document.getElementById("fio");

entrarBtn.addEventListener("click", function () {
  // Impede cliques repetidos
  entrarBtn.disabled = true;

  // Inicia a animação
  aranha.classList.add("atravessar");
  fio.classList.add("animar-fio");

  // Aguarda a animação terminar
  setTimeout(function () {
    capa.style.display = "none";
    site.classList.remove("escondido");
  }, 1800);
});
