//Valiadate form input before  adding data
function validateForm() {
  var id_producto = document.getElementById("id_producto").value;
  var nombre_producto = document.getElementById("nombre_producto").value;
  var referencia = document.getElementById("referencia").value;
  var unidades_disponibles = document.getElementById(
    "unidades_disponibles"
  ).value;
  var precio = document.getElementById("precio").value;
  var fecha_compra = document.getElementById("fecha_compra").value;
  var marca = document.getElementById("marca").value;
  var descripcion = document.getElementById("descripcion").value;
  var beneficios = document.getElementById("beneficios").value;
  var caracteristicas = document.getElementById("caracteristicas").value;
  var precio_compra = document.getElementById("precio_compra").value;
  var precio_venta = document.getElementById("precio_venta").value;
  //var foto = document.getElementById("foto").value;
  var categoria_idcategoria = document.getElementById(
    "categoria_idcategoria"
  ).value;
  var especie_idespecie = document.getElementById("especie_idespecie").value;

  if (id_producto == "") {
    alert("Id del producto es requerido");
    return false;
  }
  if (nombre_producto == "") {
    alert("Nombre del producto es requerido");
    return false;
  }
  return true;
}

//Function to show Data
function showData() {
  var peopleList;
  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }

  var html = "";

  peopleList.forEach(function (element, index) {
    html += "<tr>";
    html += "<td>" + element.id_producto + "</td>";
    html += "<td>" + element.nombre_producto + "</td>";
    html += "<td>" + element.referencia + "</td>";
    html += "<td>" + element.unidades_disponibles + "</td>";
    html += "<td>" + element.precio + "</td>";
    html += "<td>" + element.fecha_compra + "</td>";
    html += "<td>" + element.marca + "</td>";
    html += "<td>" + element.descripcion + "</td>";
    html += "<td>" + element.beneficios + "</td>";
    html += "<td>" + element.caracteristicas + "</td>";
    html += "<td>" + element.precio_compra + "</td>";
    html += "<td>" + element.precio_venta + "</td>";
    //html += "<td>" + element.foto + "</td>";
    html += "<td>" + element.categoria_idcategoria + "</td>";
    html += "<td>" + element.especie_idespecie + "</td>";
    html +=
      '<td><button onclick="deleteData(' +
      index +
      ')" class="btn btn-danger">Borrar</button><button onclick="UpdateData(' +
      index +
      ')" class ="btn btn warning m-2">Editar</button></td>';
    html += "</tr>";
  });
  document.querySelector("#crudTable tbody").innerHTML = html;
}
//Loads all data when document or page loaded
window.onload = function () {
  showData();
};

//function to add data
function AddData() {
  if (validateForm() == true) {
    var id_producto = document.getElementById("id_producto").value;
    var nombre_producto = document.getElementById("nombre_producto").value;
    var referencia = document.getElementById("referencia").value;
    var unidades_disponibles = document.getElementById(
      "unidades_disponibles"
    ).value;
    var precio = document.getElementById("precio").value;
    var fecha_compra = document.getElementById("fecha_compra").value;
    var marca = document.getElementById("marca").value;
    var descripcion = document.getElementById("descripcion").value;
    var beneficios = document.getElementById("beneficios").value;
    var caracteristicas = document.getElementById("caracteristicas").value;
    var precio_compra = document.getElementById("precio_compra").value;
    var precio_venta = document.getElementById("precio_venta").value;
    //var foto = document.getElementById("foto").value;
    var categoria_idcategoria = document.getElementById(
      "categoria_idcategoria"
    ).value;
    var especie_idespecie = document.getElementById("especie_idespecie").value;

    var peopleList;
    if (localStorage.getItem("peopleList") == null) {
      peopleList = [];
    } else {
      peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }
    peopleList.push({
      id_producto: id_producto,
      nombre_producto: nombre_producto,
      referencia: referencia,
      unidades_disponibles: unidades_disponibles,
      precio: precio,
      fecha_compra: fecha_compra,
      marca: marca,
      descripcion: descripcion,
      beneficios: beneficios,
      caracteristicas: caracteristicas,
      precio_compra: precio_compra,
      precio_venta: precio_venta,
      //foto: foto,
      categoria_idcategoria: categoria_idcategoria,
      especie_idespecie: especie_idespecie,
    });
    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    showData();
    document.getElementById("id_producto").value = "";
    document.getElementById("nombre_producto").value = "";
    document.getElementById("referencia").value = "";
    document.getElementById("unidades_disponibles").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("fecha_compra").value = "";
    document.getElementById("marca").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("beneficios").value = "";
    document.getElementById("caracteristicas").value = "";
    document.getElementById("precio_compra").value = "";
    document.getElementById("precio_venta").value = "";
    //document.getElementById("foto").value = "";
    document.getElementById("categoria_idcategoria").value = "";
    document.getElementById("especie_idespecie").value = "";
  }
}

//function to delete Data from local storage
function deleteData(index) {
  var peopleList;
  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }
  peopleList.splice(index, 1);
  localStorage.setItem("peopleList", JSON.stringify(peopleList));
  showData();
}

//function to update/edit data in local storage
function UpdateData(index) {
  document.getElementById("Submit").style.display = "none";
  document.getElementById("Update").style.display = "block";

  var peopleList;
  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }

  document.getElementById("id_producto").value = peopleList[index].id_producto;
  document.getElementById("nombre_producto").value =
    peopleList[index].nombre_producto;
  document.getElementById("referencia").value = peopleList[index].referencia;
  document.getElementById("unidades_disponibles").value =
    peopleList[index].unidades_disponibles;
  document.getElementById("precio").value = peopleList[index].precio;
  document.getElementById("fecha_compra").value =
    peopleList[index].fecha_compra;
  document.getElementById("marca").value = peopleList[index].marca;
  document.getElementById("descripcion").value = peopleList[index].descripcion;
  document.getElementById("beneficios").value = peopleList[index].beneficios;
  document.getElementById("caracteristicas").value =
    peopleList[index].caracteristicas;
  document.getElementById("precio_compra").value =
    peopleList[index].precio_compra;
  document.getElementById("precio_venta").value =
    peopleList[index].precio_venta;
  //document.getElementById("foto").value = peopleList[index].foto;
  document.getElementById("categoria_idcategoria").value =
    peopleList[index].categoria_idcategoria;
  document.getElementById("especie_idespecie").value =
    peopleList[index].especie_idespecie;

  document.querySelector("#Update").onclick = function () {
    if (validateForm() == true) {
      peopleList[index].id_producto =
        document.getElementById("id_producto").value;
      peopleList[index].nombre_producto =
        document.getElementById("nombre_producto").value;
      peopleList[index].referencia =
        document.getElementById("referencia").value;
      peopleList[index].unidades_disponibles = document.getElementById(
        "unidades_disponibles"
      ).value;
      peopleList[index].precio = document.getElementById("precio").value;
      peopleList[index].fecha_compra =
        document.getElementById("fecha_compra").value;
      peopleList[index].marca = document.getElementById("marca").value;
      peopleList[index].descripcion =
        document.getElementById("descripcion").value;
      peopleList[index].beneficios =
        document.getElementById("beneficios").value;
      peopleList[index].caracteristicas =
        document.getElementById("caracteristicas").value;
      peopleList[index].precio_compra =
        document.getElementById("precio_compra").value;
      peopleList[index].precio_venta =
        document.getElementById("precio_venta").value;
      //peopleList[index].foto = document.getElementById("foto").value;
      peopleList[index].categoria_idcategoria = document.getElementById(
        "categoria_idcategoria"
      ).value;
      peopleList[index].especie_idespecie =
        document.getElementById("especie_idespecie").value;

      localStorage.setItem("peopleList", JSON.stringify(peopleList));

      showData();

      document.getElementById("id_producto").value = "";
      document.getElementById("nombre_producto").value = "";
      document.getElementById("referencia").value = "";
      document.getElementById("unidades_disponibles").value = "";
      document.getElementById("precio").value = "";
      document.getElementById("fecha_compra").value = "";
      document.getElementById("marca").value = "";
      document.getElementById("descripcion").value = "";
      document.getElementById("beneficios").value = "";
      document.getElementById("caracteristicas").value = "";
      document.getElementById("precio_compra").value = "";
      document.getElementById("precio_venta").value = "";
      //document.getElementById("foto").value = "";
      document.getElementById("categoria_idcategoria").value = "";
      document.getElementById("especie_idespecie").value = "";

      //Update button will hide and Submit button will show
      document.getElementById("Submit").style.display = "block";
      document.getElementById("Update").style.display = "none";
    }
  }
}
