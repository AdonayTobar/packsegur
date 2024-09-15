// Simulamos que estamos mostrando el menú del negocio con ID 1 (Pizza Little Caesars)
const negocioId = 1;
const negocioSeleccionado = negocios.find(negocio => negocio.id === negocioId);

// Mostrar productos en la página
const productList = document.getElementById('product-list');
negocioSeleccionado.menu.forEach(producto => {
  productList.innerHTML += `
    <div class="product-card">
      <img src="${producto.imagen}" alt="${producto.nombre}" onclick="ampliarImagen('${producto.imagen}')">
      <h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio.toFixed(2)}</p>
      <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
    </div>
  `;
});

// Seleccionar el contenedor donde se mostrará el negocio
const detalleNegocio = document.getElementById('detalle-negocio');

// Insertar el nombre y el logo del negocio en el contenedor
detalleNegocio.innerHTML = `
    <section style="text-align: center; margin: 0px;">
        <img src="${negocioSeleccionado.logo}" alt="${negocioSeleccionado.nombre}" style="width: 100%; max-width: 500px; height: auto; margin-top: 20px;">
    </section>
`;

//Esto es para el modal
// Función para abrir el modal y mostrar la imagen ampliada
function ampliarImagen(src) {
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-image');
  
  modal.style.display = "block";
  modalImg.src = src;
}

// Función para cerrar el modal
document.getElementById('close-modal').onclick = function() {
  document.getElementById('image-modal').style.display = "none";
}

// Cerrar el modal cuando se hace clic fuera de la imagen
window.onclick = function(event) {
  const modal = document.getElementById('image-modal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


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
