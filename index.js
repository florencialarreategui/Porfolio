const botonDibujar = document.querySelector(".boton-dibujar")
const canvas = document.querySelector("#dibujo");
const navBar = document.querySelector(".navBar"); 

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const punto = document.createElement("img");
const flor = document.createElement("img");

punto.src = "./imagenes/dot.png";
flor.src = "./imagenes/flor7.png";

const context = canvas.getContext("2d");

let pincel = punto;

const handleMouseMove = (event) => {
   const left = event.clientX;
   const top = event.clientY;
   context.drawImage (pincel, left, top)
};

const handleClick = () => {
   if (pincel === punto){
      pincel = flor
   } else {
      pincel = punto
   }

};

botonDibujar.onclick = () => {
   console.log("Funciona")
 }

// botonDibujar.onclick = () => {
//    canvas.addEventListener ("click", handleClick) 
//    canvas.addEventListener ("mousemove", handleMouseMove)  
  

// }





