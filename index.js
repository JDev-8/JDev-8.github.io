const container_main = document.getElementById("container_main");

const comercio = document.getElementById("comercio");
const economia = document.getElementById("economia");
const datos_region = document.getElementById("datos_region");
const dato_curioso = document.getElementById("dato_curioso");
const cultura = document.getElementById("cultura");

comercio.addEventListener("click", (event) => {
  event.preventDefault();

  fetch('comercio.html')
    .then(response => response.text())
    .then(html => {
      container_main.innerHTML = html;
    });
});

economia.addEventListener("click", (event) => {
  event.preventDefault();

  fetch("economia.html")
    .then(response => response.text())
    .then(html => {
      container_main.innerHTML = html;
    });
});

datos_region.addEventListener("click", (event) => {
  event.preventDefault();

  fetch("datos-region.html")
    .then(response => response.text())
    .then(html => {
      container_main.innerHTML = html;
    });
});

dato_curioso.addEventListener("click", (event) => {
  event.preventDefault();

  fetch("dato-curioso.html")
    .then(response => response.text())
    .then(html => {
      container_main.innerHTML = html;
    });
});

cultura.addEventListener("click", (event) => {
  event.preventDefault();

  fetch("cultura.html")
    .then(response => response.text())
    .then(html => {
      container_main.innerHTML = html;
    });
});
