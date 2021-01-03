
const boton_entrar = document.querySelector("#boton-entrar");

const boton_registrar = document.querySelector("#boton-registrar");

const _contenedor = document.querySelector(".contenedor");

boton_entrar.addEventListener('click', () =>{
    _contenedor.classList.add("modo-entrar");
});

boton_registrar.addEventListener('click', () =>{
    _contenedor.classList.remove("modo-entrar");
});