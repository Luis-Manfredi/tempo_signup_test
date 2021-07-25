
function abrirMenu(){
    let contenido = document.getElementById("contenido");
    let menu = document.getElementById("menu");
    let close = document.getElementById("close");

    if (contenido.style.display == "none"){
        contenido.style.display = "block";
        menu.style.display = "none";
        close.style.display = "flex";
    }
    else{
        contenido.style.display = "none";
        menu.style.display = "flex";
        close.style.display = "none";
    }
}