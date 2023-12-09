
//elementos del Dom
const precioSpan = document.querySelector(".precio-inicial");
const total= document.querySelector(".valor-total")
const sumar= document.querySelector("#btn-sumar")
const restar= document.querySelector("#btn-restar")
const cantidad = document.querySelector(".cantidad")

//variables
let precio = 400000
let totalValue = 0
precioSpan.innerHTML= precio
total.innerHTML= totalValue

//funciones
function sumarPrecio() {
    totalValue += precio
    total.innerHTML= totalValue
    cantidad.innerHTML= Number(cantidad.innerHTML) + 1
}

function restarPrecio() {
    if (Number(cantidad.innerHTML) != 0){
        cantidad.innerHTML= Number(cantidad.innerHTML) - 1
        totalValue -= precio
    }
    else {
        totalValue=0
    }
    total.innerHTML= totalValue
}

//eventos 
sumar.addEventListener("click", sumarPrecio)

restar.addEventListener("click", restarPrecio)
