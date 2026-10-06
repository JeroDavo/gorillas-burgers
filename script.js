let cliente = document.getElementById("nombreCliente");
const burger = document.getElementById("BurgerSelect");
const cantiD = document.getElementById("cantidad"); 
const botonAg = document.getElementById("btnAgregar");
let productos = document.getElementById("productosAgregados");
let totalF = document.getElementById("totalFinal");
const botonPd = document.getElementById("btnPedido");

let carrito = [];

function renderizarTicket(){
    productos.innerHTML = "";


    let totalCompleto = 0;

carrito.forEach((item) => {
    totalCompleto += item.subtotal;

    const lineaProd = document.createElement('div');
    lineaProd.style.display = "flex";
    lineaProd.style.justifyContent = "space-between";
    lineaProd.style.marginBottom = "5px"; 

    const textoProd = document.createElement('span');
    textoProd.textContent = `${item.cantidad}x ${item.nombre} - $${item.subtotal}`;

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = "❌";
    botonEliminar.style.background = "none";
    botonEliminar.style.border = "none";
    botonEliminar.style.cursor = "pointer";

    botonEliminar.addEventListener('click', () => {
        carrito = carrito.filter(producto => producto.id !== item.id);

        renderizarTicket();
    });

    lineaProd.appendChild(textoProd);
    lineaProd.appendChild(botonEliminar);
    productos.appendChild(lineaProd);

 });

   totalF.textContent = `Total: $${totalCompleto}.00`;

}

botonAg.addEventListener('click', () => {

    if(burger.value === "" || cantiD.value === ""){
        alert("Selecciona un Producto, Por Favor.");
        return;
    }
    
    const seleccion = burger.options[burger.selectedIndex];

    const precio = parseInt(seleccion.dataset.precio);

    const cantidad = parseInt(cantiD.value, 10);

    const totalProd = precio * cantidad;



    const nuevoProducto = {
        id: Date.now(),
        nombre: seleccion.value,
        cantidad: cantidad,
        subtotal: totalProd
    };

    carrito.push(nuevoProducto);

    renderizarTicket();

    burger.value = "";
    cantiD.value = "";
});

botonPd.addEventListener('click', () => {

    if(carrito.length === 0){
        alert("Selecciona un Producto, Por Favor.");
        return;
    }

    alert("Pedido Enviado a Cocina");

    burger.value = "";
    cantiD.value = "";
    
    carrito = [];

    renderizarTicket();


});
