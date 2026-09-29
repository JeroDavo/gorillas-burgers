let cliente = document.getElementById("nombreCliente");
const burger = document.getElementById("BurgerSelect");
const cantiD = document.getElementById("cantidad"); 
const botonAg = document.getElementById("btnAgregar");
let productos = document.getElementById("productosAgregados");
let totalF = document.getElementById("totalFinal");
const botonPd = document.getElementById("btnPedido");

let totalCompleto = 0

botonAg.addEventListener('click', () => {

    if(burger.value === "" || cantiD.value === ""){
        alert("Selecciona un Producto, Por Favor.");
        return;
    }
    
    const seleccion = burger.options[burger.selectedIndex];

    const precio = parseInt(seleccion.dataset.precio);

    const cantidad = parseInt(cantiD.value, 10);

    const totalProd = precio * cantidad;



    totalCompleto += totalProd;

    const listaProd = document.createElement('li');

    listaProd.textContent = `${cantidad} ${seleccion.value} - $${totalProd}`;

    productos.appendChild(listaProd);

   //totalF = totalFinal

    totalF.textContent =`Total:  $${totalCompleto}`; 

   //cantiD = cantidad

    burger.value = "";
    cantiD.value = "";
});

botonPd.addEventListener('click', () => {

    if(productos.textContent === ""){
        alert("Selecciona un Producto, Por Favor.");
        return;
    }

    alert("Pedido Enviado a Cocina");

    burger.value = "";
    cantiD.value = "";
    totalF.textContent = "Total:  $0.00";
    productos.textContent = "";
    totalCompleto = 0;

});
