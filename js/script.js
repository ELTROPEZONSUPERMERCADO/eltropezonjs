// ----------------------------
// BASE DE PRODUCTOS
// ----------------------------
const productos = [
  {
    id: 1,
    nombre: "Manzana 🍎",
    categoria: "Frutas",
    precio: 500,
    descripcion: "Manzanas rojas frescas",
    imagen: ""
  },
  {
    id: 2,
    nombre: "Leche 🥛",
    categoria: "Lácteos",
    precio: 1200,
    descripcion: "Leche entera 1L",
    imagen: ""
  },
  {
    id: 3,
    nombre: "Fideos 🍝",
    categoria: "Almacén",
    precio: 950,
    descripcion: "Fideos secos 500g",
    imagen: ""
  },
  {
    id: 4,
    nombre: "Pan 🥖",
    categoria: "Panadería",
    precio: 300,
    descripcion: "Pan francés fresco",
    imagen: ""
  },
  {
    id: 5,
    nombre: "Queso 🧀",
    categoria: "Lácteos",
    precio: 2500,
    descripcion: "Queso cheddar 200g",
    imagen: ""
  },   
];




const contenedor = document.getElementById("contenedor-productos");
const carritoDOM = document.getElementById("carrito");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
localStorage.setItem("productos", JSON.stringify(productos));


function mostrarProductos(lista) {
  contenedor.innerHTML = "";

  lista.forEach(producto => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <p><strong>$${producto.precio}</strong></p>
        <button class="btn-agregar">Agregar al carrito</button>
      `;

   
    card.querySelector(".btn-agregar").addEventListener("click", () => {
      carrito.push(producto);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      actualizarCarrito();
    });

    contenedor.appendChild(card);
  });
}


function actualizarCarrito() {
  carritoDOM.innerHTML = "";

  if (carrito.length === 0) {
    carritoDOM.innerHTML = "<p>El carrito está vacío.</p>";
    return;
  }

  carrito.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
      <h3>${item.nombre}</h3>
      <p>Precio: $${item.precio}</p>
      <p>Categoría: ${item.categoria}</p>
    `;

    carritoDOM.appendChild(div);
  });
}

const vaciarCarritoBtn = document.getElementById("vaciar-carrito");
vaciarCarritoBtn.addEventListener("click", () => {
  carrito = [];
  localStorage.removeItem("carrito")
carritoDOM.innerHTML = "<p>El carrito está vacío.</p>";

mostrarProductos(productos);});


mostrarProductos(productos);
actualizarCarrito();