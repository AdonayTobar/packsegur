// Obtener el carrito del localStorage
carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Referencias a elementos del DOM
const cartItems = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');

// Función para mostrar los productos en el carrito
function mostrarCarrito() {
  cartItems.innerHTML = '';
  let total = 0;

  carrito.forEach((item, index) => {
    total += item.precio * item.cantidad;
    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${item.imagen}" alt="${item.nombre}">
        <h3>${item.nombre}</h3>
        <p>Precio: $${item.precio.toFixed(2)}</p>
        <p>Cantidad: <input type="number" value="${item.cantidad}" min="1" onchange="actualizarCantidad(${index}, this.value)"></p>
        <button onclick="eliminarProducto(${index})">X</button>
      </div>
    `;
  });

  totalPrice.textContent = total.toFixed(2);
}

// Función para actualizar la cantidad de un producto
function actualizarCantidad(index, cantidad) {
  carrito[index].cantidad = parseInt(cantidad);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  mostrarCarrito();
}

// Función para eliminar un producto del carrito
function eliminarProducto(index) {
  carrito.splice(index, 1);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  mostrarCarrito();
}

// Función para finalizar la compra
document.getElementById('checkout-btn').addEventListener('click', () => {
  // Obtener datos del formulario
  const nombre = document.getElementById('nombre').value;
  const telefono = document.getElementById('telefono').value;
  const ubicacion = document.getElementById('ubicacion').value;
  const instrucciones = document.getElementById('instrucciones').value;

  // Validar que los campos no estén vacíos
  if (!nombre || !telefono || !ubicacion) {
    alert('Por favor, rellena todos los campos obligatorios.');
    return;
  }

  const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
  const mensaje = carrito.map(item => `${item.nombre} x${item.cantidad} - $${(item.precio * item.cantidad).toFixed(2)}`).join('\n');
  
  // Añadir datos del cliente al mensaje final
  const mensajeFinal = `Pedido:\n${mensaje}\nTotal: $${total.toFixed(2)}\n\nDatos del cliente:\nNombre: ${nombre}\nTeléfono: ${telefono}\nUbicación: ${ubicacion}\nInstrucciones adicionales: ${instrucciones}\n\n*Los precios no incluyen delivery*`;

  const numeroWhatsApp = '72757591';
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeFinal)}`;

  window.open(urlWhatsApp, '_blank');

  // Limpiar el carrito después de finalizar la compra
  carrito = [];
  localStorage.removeItem('carrito');
  mostrarCarrito();
});

// Inicializar la página mostrando el carrito
mostrarCarrito();
