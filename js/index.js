document.querySelector(".btn-menu").addEventListener("click",funcionMenu);

document.querySelectorAll(".navegacion a").forEach((seccion)=>{
    seccion.addEventListener("click",funcionMenu);
});


function funcionMenu(){
    document.querySelector(".panel").classList.toggle("is-active");
}