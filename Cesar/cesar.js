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
// Cargar el carrito desde localStorage si existe
if (localStorage.getItem('carrito')) {
  carrito = JSON.parse(localStorage.getItem('carrito'));
}

// Guardar el carrito en localStorage
function guardarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
  actualizarContadorCarrito();
}

// Función para agregar producto al carrito
function agregarAlCarrito(idProducto) {
  const productoSeleccionado = negocioSeleccionado.menu.find(producto => producto.id === idProducto);

  // Buscar si el negocio ya está en el carrito
  let negocioEnCarrito = carrito.find(item => item.negocioId === negocioSeleccionado.id);

  if (negocioEnCarrito) {
    // Si el negocio ya está en el carrito, buscar si el producto ya está en ese negocio
    const productoEnNegocio = negocioEnCarrito.productos.find(producto => producto.id === idProducto);
    
    if (productoEnNegocio) {
      // Si el producto ya está, aumentar la cantidad
      productoEnNegocio.cantidad += 1;
    } else {
      // Si el producto no está, agregarlo al array de productos del negocio
      negocioEnCarrito.productos.push({ ...productoSeleccionado, cantidad: 1 });
    }
  } else {
    // Si el negocio no está en el carrito, agregar un nuevo objeto de negocio con el producto
    carrito.push({
      negocioId: negocioSeleccionado.id,
      nombreNegocio: negocioSeleccionado.nombre,
      productos: [{ ...productoSeleccionado, cantidad: 1 }]
    });
  }

  // Guardar el carrito actualizado en localStorage
  localStorage.setItem('carrito', JSON.stringify(carrito));

  // Actualizar el conteo del carrito (si tienes un contador en la página secundaria)
  actualizarCarrito();
}




// Función para actualizar el carrito (en la página secundaria, si aplica)
function actualizarCarrito() {
  const cartCount = document.getElementById('cart-count');
  
  // Contar el total de productos en todos los negocios
  const totalItems = carrito.reduce((total, negocio) => {
    const productosEnNegocio = negocio.productos.reduce((subtotal, producto) => subtotal + producto.cantidad, 0);
    return total + productosEnNegocio;
  }, 0);

  cartCount.textContent = totalItems;
}


// Llamar a la función para actualizar el contador cuando cargue la página secundaria
actualizarCarrito();
