const tabla = document.getElementById('tbody');
const productos=[
  {   id:1,
      img:"https://laika.com.co/cdn-cgi/image/fit=scale-down,width=250,format=auto,quality=80,onerror=redirect/https://laikapp.s3.amazonaws.com/dev_images_products/642_181490_Hills___Science_Diet_Puppy_Small_Bites_Dog_1659549007_800x800.jpg",
      nombre: "Hills  ",
      Descripcion:"Science Diet Puppy Small Paws ",
      precio:88.749,
  },
  {    id:2,
      img:"https://laika.com.co/cdn-cgi/image/fit=scale-down,width=250,format=auto,quality=80,onerror=redirect/https://laikapp.s3.amazonaws.com/dev_images_products/78483_158298_Ganador___Premium_Cachorro_1652215796_500x500.jpg",
      nombre: "Ganador Premium",
      Descripcion:"Cachorro",
      precio:50.205,
      
  },
  {   id:3,
      img:"https://laika.com.co/cdn-cgi/image/fit=scale-down,width=250,format=auto,quality=80,onerror=redirect/https://laikapp.s3.amazonaws.com/dev_images_products/79678_Royal_Canin___Bulldog_Adulto_1657638085_0_500x500.jpg",
      nombre: "Royal Canin ",
      Descripcion:"Bull Dog Adulto",
      precio:88.704,
  },
  {   id:4,
      img:"https://laika.com.co/cdn-cgi/image/fit=scale-down,width=250,format=auto,quality=80,onerror=redirect/https://s3.us-east-1.amazonaws.com/laikapp/images_products/a713317e0cf3cc5f446e6b27fe83de81.jpg",
      nombre: "Nutrecan  ",
      Descripcion:"Alimentos Perros Campo",
      precio:62.916,
  },
  {   id:5,
      img:"https://laika.com.co/cdn-cgi/image/fit=scale-down,width=250,format=auto,quality=80,onerror=redirect/https://laikapp.s3.amazonaws.com/dev_images_products/5bcfe755dc8fd3850c241444592100ee_1681394089.jpg",
      nombre: "Max Vita ",
      Descripcion:"Alimento Perro Cachorro",
      precio:50.185,
  },
  {   id:6,
      img:"https://laika.com.co/cdn-cgi/image/fit=scale-down,width=250,format=auto,quality=80,onerror=redirect/https://laikapp.s3.amazonaws.com/dev_images_products/78136_Nutrique_Perro_Cachorro_Talla_Mediana_1651524834_0_500x500.jpg",
      nombre: "Nutrique ",
      Descripcion:"Perro Cachorro Talla Mediana",
      precio:42.356,
  },
  {   id:7,
      img:"https://laika.com.co/cdn-cgi/image/fit=scale-down,width=250,format=auto,quality=80,onerror=redirect/https://laikapp.s3.amazonaws.com/dev_images_products/134_138110_Purina_Pro_Plan___Cachorros_Razas_Peque__as_1645479687_500x500.jpg",
      nombre: " Pro Plan Puppy",
      Descripcion:" Razas Pequeñas",
      precio: 50.156,
  },
  {   
      id:8,
      img:"https://laika.com.co/cdn-cgi/image/fit=scale-down,width=250,format=auto,quality=80,onerror=redirect/https://laikapp.s3.amazonaws.com/dev_images_products/18833_133298_DOG_CHOW___TODOS_LOS_TAMA__OS_CON_CORDERO_1643318082_500x500.jpg",
      nombre: "Dog Chow ",
      Descripcion:"Salud Visible Adultos",
      precio:105.655,
  },
  {   
    id:8,
    img:"https://laika.com.co/cdn-cgi/image/fit=scale-down,width=250,format=auto,quality=80,onerror=redirect/https://laikapp.s3.amazonaws.com/dev_images_products/18833_133298_DOG_CHOW___TODOS_LOS_TAMA__OS_CON_CORDERO_1643318082_500x500.jpg",
    nombre: "Dog Chow ",
    Descripcion:"Salud Visible Adultos",
    precio:105.655,
},


];

productos.forEach(produc => {

  let tr = document.createElement("tr");
  let id = document.createElement("td");
  let nombre = document.createElement("td");
  let descripcion = document.createElement("td");
  let precio = document.createElement("td");
  let img = document.createElement("td");
  let imagen=document.createElement("img");
 
  /***************************/ 
  id.textContent=produc.id
  tr.append(id);
  nombre.textContent=produc.nombre
  tr.append(nombre);
  descripcion.textContent=produc.Descripcion
  tr.append(descripcion);
  precio.textContent=produc.precio
  tr.append(precio);
  tr.append(img);
  img.append(imagen);
  imagen.src=produc.img
  
  /************************************ */
  tabla.append(tr);
      
});

/** ****************************************************** */


function agragraProducto() {
     let produc=
    {   id:20,
        img:imagen.value,
        nombre:nombre.value,
        Descripcion:descripcion.value,
        precio:precio.value
    }
  productos.push(produc);

    
};

 