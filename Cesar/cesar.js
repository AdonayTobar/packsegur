// Simulamos que estamos mostrando el menú del negocio con ID 1 (Pizza Little Caesars)
const negocioId = 1;
const negocioSeleccionado = negocios.find(negocio => negocio.id === negocioId);

// Mostrar productos en la página
const productList = document.getElementById('product-list');
negocioSeleccionado.menu.forEach(producto => {
  productList.innerHTML += `
    <div class="product-card">
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio.toFixed(2)}</p>
      <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
    </div>
  `;
});


//Esto es para el carrito
// Recuperar el carrito de localStorage
carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para agregar producto al carrito
function agregarAlCarrito(idProducto) {
  const productoSeleccionado = negocioSeleccionado.menu.find(producto => producto.id === idProducto);
  
  // Verificar si ya existe en el carrito
  const itemEnCarrito = carrito.find(item => item.id === idProducto);
  if (itemEnCarrito) {
    itemEnCarrito.cantidad += 1;
  } else {
    carrito.push({ ...productoSeleccionado, cantidad: 1 });
  }

  // Guardar el carrito actualizado en localStorage
  localStorage.setItem('carrito', JSON.stringify(carrito));

  // Actualizar el conteo del carrito (si tienes un contador en la página secundaria)
  actualizarCarrito();
}

// Función para actualizar el carrito (en la página secundaria, si aplica)
function actualizarCarrito() {
  const cartCount = document.getElementById('cart-count');
  const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
  cartCount.textContent = totalItems;
}

// Llamar a la función para actualizar el contador cuando cargue la página secundaria
actualizarCarrito();
