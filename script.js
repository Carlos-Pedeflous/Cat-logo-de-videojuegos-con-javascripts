const videojuegos = [
  { id: 1, nombre: "minecraft", genero: "sandbox", precio: 1000 },
  { id: 2, nombre: "left4dead2", genero: "survival", precio: 2500 },
  { id: 3, nombre: "cs2", genero: "Competitive", precio: 0 },
];

function mostrarVideojuegos(array) {
  const contenedor = document.getElementById("catalogo-videojuegos");
  contenedor.innerHTML = "";
  array.forEach((juego) => {
    const nuevoDiv = document.createElement("div");
    const tituloJuego = document.createElement("h3");
    const genero = document.createElement("p");
    const precio = document.createElement("p");
    tituloJuego.textContent = juego.nombre;
    genero.textContent = juego.genero;
    precio.textContent = juego.precio;
    nuevoDiv.appendChild(tituloJuego);
    nuevoDiv.appendChild(genero);
    nuevoDiv.appendChild(precio);
    contenedor.appendChild(nuevoDiv);
  });
}

mostrarVideojuegos(videojuegos);
