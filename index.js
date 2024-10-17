


//Codigo del menu
let prevScrollPos = window.pageYOffset;
const menu = document.querySelector('.menu-prin');

// Asegura que el menú esté en el punto cero cuando la página carga
window.onload = function() {
    menu.style.top = "0";
};

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    // Si se desplaza más de 30px hacia abajo, oculta el menú
    if (currentScrollPos > 30) {
        if (prevScrollPos < currentScrollPos) {
            // Ocultar al bajar
            menu.style.top = "-500px"; // Ajusta este valor dependiendo de la altura de tu menú
        } else {
            // Mostrar al subir
            menu.style.top = "0";
        }
    } else {
        // Si estamos cerca del tope, siempre mostrar el menú
        menu.style.top = "0";
    }
    
    // Actualizamos la posición previa de scroll
    prevScrollPos = currentScrollPos;
};




//Declarando el array de los negocios
const negocios = [
  {
    id: 1,
    nombre: 'Pizza Litte Caesars',
    categorias: ['Pizza', 'Almuerzo'],
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoaORguKiAaXYq2m3P73HXpKEvSZ3bsA5R5A&s',
    url: '/Cesar/cesar.html',
    menu: [
      { id: 1, nombre: 'Pizza Pepperoni $5', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2021/01/Pepperoni.jpg', precio: 5.00 },
      { id: 2, nombre: 'Pizza Jamon', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2021/01/Jamon.jpg', precio: 5.00 },
      { id: 3, nombre: 'Super Chesse Gigante', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2022/07/Super-Cheese.jpg', precio: 7.75 },
      { id: 4, nombre: 'Cheeser Gigante', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2021/03/Cheeser.jpg', precio: 4.50 },
      { id: 5, nombre: 'Deluxe 4N1 Chessy Cheddar', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2024/07/4N1-cheesy-cheddar.jpg', precio: 7.75 },
      { id: 6, nombre: 'Ultimate Supreme', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2022/07/Ultimate-Supreme.jpg', precio: 8.95 },
      { id: 7, nombre: '3 Meat Treat', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2022/07/3-Meat-Treat.jpg', precio: 8.95 },
      { id: 8, nombre: 'Hula-Hawaiian', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2023/12/Hula-Hawaiian.png', precio: 8.50 },
      { id: 9, nombre: 'Crazy Bread', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2022/07/CRAZY-BREAD.jpg', precio: 2.25 },
      { id: 10, nombre: 'Canelitas', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2022/07/Canelitas.jpg', precio: 2.50 },
      { id: 11, nombre: 'Crazy Cheese Bread', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2023/12/Crazy-cheese-bread.png', precio: 3.50 },
      { id: 12, nombre: 'Crazy Puffs', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2024/04/Crazy-Puffs-QT.jpg', precio: 2.99 },
    ]
  },
  {
    id: 2,
    nombre: 'Subway',
    categorias: ['Almuerzo'],
    logo: '/Subway/LogoSubway.png',
    url: '/Subway/subway.html',
    menu: [
      { id: 11, nombre: 'Subway2', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2021/01/Pepperoni.jpg', precio: 6.00 },
      { id: 22, nombre: 'Subway3', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2021/01/Jamon.jpg', precio: 7.00 },
      { id: 33, nombre: 'Subway1', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2022/07/Super-Cheese.jpg', precio: 7.75 }
    ]
  },
  {
    id: 3,
    nombre: 'Pizza Litte Caesars',
    categorias: ['Pizza', 'Almuerzo'],
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoaORguKiAaXYq2m3P73HXpKEvSZ3bsA5R5A&s',
    url: '/subway.html',
    menu: [
      { id: 1, nombre: 'Pizza Pepperoni $5', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2021/01/Pepperoni.jpg', precio: 5.00 },
      { id: 2, nombre: 'Pizza Jamon', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2021/01/Jamon.jpg', precio: 5.00 },
      { id: 3, nombre: 'Super Chesse Gigante', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2022/07/Super-Cheese.jpg', precio: 7.75 }
    ]
  },
  {
    id: 4,
    nombre: 'Pizza Litte Caesars',
    categorias: ['Pizza', 'Almuerzo'],
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoaORguKiAaXYq2m3P73HXpKEvSZ3bsA5R5A&s',
    url: '/cesar.html',
    menu: [
      { id: 1, nombre: 'Pizza Pepperoni $5', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2021/01/Pepperoni.jpg', precio: 5.00 },
      { id: 2, nombre: 'Pizza Jamon', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2021/01/Jamon.jpg', precio: 5.00 },
      { id: 3, nombre: 'Super Chesse Gigante', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2022/07/Super-Cheese.jpg', precio: 7.75 }
    ]
  },
  {
    id: 5,
    nombre: 'Pizza Litte Caesars',
    categorias: ['Pizza', 'Almuerzo'],
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoaORguKiAaXYq2m3P73HXpKEvSZ3bsA5R5A&s',
    url: '/cesar.html',
    menu: [
      { id: 1, nombre: 'Pizza Pepperoni $5', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2021/01/Pepperoni.jpg', precio: 5.00 },
      { id: 2, nombre: 'Pizza Jamon', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2021/01/Jamon.jpg', precio: 5.00 },
      { id: 3, nombre: 'Super Chesse Gigante', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2022/07/Super-Cheese.jpg', precio: 7.75 }
    ]
  },
  {
    id: 6,
    nombre: 'Pizza Litte Caesars',
    categorias: ['Pizza', 'Almuerzo'],
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoaORguKiAaXYq2m3P73HXpKEvSZ3bsA5R5A&s',
    url: '/cesar.html',
    menu: [
      { id: 1, nombre: 'Pizza Pepperoni $5', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2021/01/Pepperoni.jpg', precio: 5.00 },
      { id: 2, nombre: 'Pizza Jamon', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2021/01/Jamon.jpg', precio: 5.00 },
      { id: 3, nombre: 'Super Chesse Gigante', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2022/07/Super-Cheese.jpg', precio: 7.75 }
    ]
  },
  {
    id: 7,
    nombre: 'Pizza Litte Caesars',
    categorias: ['Pizza', 'Almuerzo'],
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoaORguKiAaXYq2m3P73HXpKEvSZ3bsA5R5A&s',
    url: '/cesar.html',
    menu: [
      { id: 1, nombre: 'Pizza Pepperoni $5', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2021/01/Pepperoni.jpg', precio: 5.00 },
      { id: 2, nombre: 'Pizza Jamon', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2021/01/Jamon.jpg', precio: 5.00 },
      { id: 3, nombre: 'Super Chesse Gigante', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2022/07/Super-Cheese.jpg', precio: 7.75 }
    ]
  },
  {
    id: 8,
    nombre: 'Pizza Litte Caesars',
    categorias: ['Pizza', 'Almuerzo'],
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoaORguKiAaXYq2m3P73HXpKEvSZ3bsA5R5A&s',
    url: '/Cesar/cesar.html',
    menu: [
      { id: 1, nombre: 'Pizza Pepperoni $5', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2021/01/Pepperoni.jpg', precio: 5.00 },
      { id: 2, nombre: 'Pizza Jamon', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2021/01/Jamon.jpg', precio: 5.00 },
      { id: 3, nombre: 'Super Chesse Gigante', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2022/07/Super-Cheese.jpg', precio: 7.75 }
    ]
  },
  {
    id: 9,
    nombre: 'Pollo',
    categorias: ['Pollo', 'Almuerzo'],
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoaORguKiAaXYq2m3P73HXpKEvSZ3bsA5R5A&s',
    url: '/cesar.html',
    menu: [
      { id: 1, nombre: 'Pizza Pepperoni $5', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2021/01/Pepperoni.jpg', precio: 5.00 },
      { id: 2, nombre: 'Pizza Jamon', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2021/01/Jamon.jpg', precio: 5.00 },
      { id: 3, nombre: 'Super Chesse Gigante', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2022/07/Super-Cheese.jpg', precio: 7.75 }
    ]
  },
  {
    id: 10,
    nombre: 'Pupusas',
    categorias: ['Cena', 'Almuerzo'],
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoaORguKiAaXYq2m3P73HXpKEvSZ3bsA5R5A&s',
    url: '/cesar.html',
    menu: [
      { id: 1, nombre: 'Pizza Pepperoni $5', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2021/01/Pepperoni.jpg', precio: 5.00 },
      { id: 2, nombre: 'Pizza Jamon', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2021/01/Jamon.jpg', precio: 5.00 },
      { id: 3, nombre: 'Super Chesse Gigante', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2022/07/Super-Cheese.jpg', precio: 7.75 }
    ]
  },

  // Agrega más negocios aquí
];

//Guardando el array de negocios en localstorage
localStorage.setItem('negocios', JSON.stringify(negocios));

//Declarando el array del carrito
// Verificar si ya existe un carrito en localStorage
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para actualizar el conteo de productos en el carrito en la página principal
function actualizarCarritoPrincipal() {
  const cartCount = document.getElementById('cart-count');
  
  // Calcular el total de productos en el carrito, sumando por negocio y producto
  const totalItems = carrito.reduce((total, negocio) => {
    const productosEnNegocio = negocio.productos.reduce((subtotal, producto) => subtotal + producto.cantidad, 0);
    return total + productosEnNegocio;
  }, 0);

  // Mostrar el total de productos en el contador del carrito
  cartCount.textContent = totalItems;
}


// Guardar el carrito en localStorage cada vez que se actualice
localStorage.setItem('carrito', JSON.stringify(carrito));

// Llamar a la función para actualizar el contador en la página principal
actualizarCarritoPrincipal();



//Mostrando los negocios del array



const contenedor = document.getElementById('negocios-afiliados');

    const searchInput = document.getElementById('search');//Obteniendo el input buscador

    // Función para mostrar todos los negocios
function mostrarNegocios(negocios) {
  contenedor.innerHTML = ''; // Limpiar contenido actual
  negocios.forEach((negocio) => {
    contenedor.innerHTML += `
      <div class="negocio" onclick="window.location.href='${negocio.url}'">
        <img src="${negocio.logo}" alt="${negocio.nombre}">
        <h3>${negocio.nombre}</h3>
      </div>
    `;
  });
}

// Mostrar todos los negocios al cargar la página
mostrarNegocios(negocios);

// Escuchar el evento de búsqueda
searchInput.addEventListener('input', function() {
  const query = searchInput.value.toLowerCase();
  
  if (query === '') {
    mostrarNegocios(negocios); // Si no hay búsqueda, mostrar todos los negocios
  } else {
    // Filtrar los negocios por el nombre o las categorías
    const resultadosFiltrados = negocios.filter(negocio => 
      negocio.nombre.toLowerCase().includes(query) ||
      negocio.categorias.some(categoria => categoria.toLowerCase().includes(query))
    );

    // Mostrar solo los resultados filtrados
    mostrarNegocios(resultadosFiltrados);
  }
});
console.log(negocios); // Verificar si se muestra el array correctamente



