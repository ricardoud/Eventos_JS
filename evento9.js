const box = document.getElementById("box");

box.addEventListener("animationend", function() {
    alert("La animación ha terminado");
});

box.style.animation = "example 4s forwards";

// Definición de la animación
const keyframes = [
    { backgroundColor: "red" },
    { backgroundColor: "blue" }
];

box.animate(keyframes, {
    duration: 2000,
    fill: "forwards"
});
