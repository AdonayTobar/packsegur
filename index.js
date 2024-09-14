


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
    url: '/cesar.html',
    menu: [
      { id: 1, nombre: 'Pizza Pepperoni $5', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2021/01/Pepperoni.jpg', precio: 5.00 },
      { id: 2, nombre: 'Pizza Jamon', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2021/01/Jamon.jpg', precio: 5.00 },
      { id: 3, nombre: 'Super Chesse Gigante', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2022/07/Super-Cheese.jpg', precio: 7.75 }
    ]
  },
  {
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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

  // Agrega más negocios aquí
];

//Declarando el array del carrito



//Mostrando los negocios del array
// Filtrar negocios por categoría
const filtrarPorCategoria = (categoria) => {
  return negocios.filter((negocio) => negocio.categorias.includes(categoria));
};

// Ejemplo de cómo obtener los negocios de la categoría "Pizza"
const negociosPizza = filtrarPorCategoria('Pizza');
console.log(negociosPizza);

const contenedor = document.getElementById('negocios-afiliados');

    negocios.forEach((negocio) => {
      contenedor.innerHTML += `
        <div class="negocio" onclick="window.location.href='${negocio.url}'">
          <img src="${negocio.logo}" alt="${negocio.nombre}">
          <h3>${negocio.nombre}</h3>
        </div>
      `;
    });