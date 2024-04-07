const box = document.getElementById("box");

box.addEventListener("transitionend", function() {
    alert("La transición ha terminado");
});

box.style.transition = "width 2s";

// Hacemos una transición de la anchura
box.style.width = "200px";
