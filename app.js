let randomNumber = 0;
let intentos = 0;
let numerosorteados = [];
let numeromaximo = 10;

//funcion para asignar texto en el parrafo
function asinarTexto(elemento, texto) {
  let escrito = document.querySelector(elemento);
  escrito.innerHTML = texto;
  return;
}

//funcion mensajes iniciales
function mensajes() {
  asinarTexto("h1", "Juego del número secreto");
  asinarTexto("p", "Indica un número del 1 al 100");
  randomNumber = generarNumber(1, 100);
  intentos = 1;
}

//funcion para general el numero aleatorio
function generarNumber(start, end) {
  let numerogenerado = parseInt(Math.floor(Math.random() * end) + start);

  if (numerosorteados.length == numeromaximo) {
    asinarTexto("h1", "Ya agostaste los 10 intentos");
  } else {
    if (numerosorteados.includes(numerogenerado)) {
      return generarNumber();
    } else {
      numerosorteados.push(numerogenerado);
      return numerogenerado;
    }
  }
}

// funcion para el juego
function tryUser() {
  let userNumber = parseInt(document.getElementById("inp").value);
  if (userNumber === randomNumber) {
    asinarTexto(
      "p",
      `Congratulation, number success in ${intentos} ${
        intentos === 1 ? " vez" : " veces"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
    document.getElementById("try").setAttribute("disabled", "trues");
  }
  // user no acerto
  else {
    if (userNumber > randomNumber) {
      asinarTexto("p", "Try again, number menor");
      cleanbox();
    } else {
      asinarTexto("p", "Try again, number mayor");
      cleanbox();
    }
  }
  intentos++;
  return;
}

// funcion para limpiar input
function cleanbox() {
  document.querySelector("#inp").value = "";
  return;
}
// funcion para reiniciar el juego
function restart() {
  cleanbox();
  mensajes();
  document.getElementById("reiniciar").setAttribute("disabled", "true");
}
mensajes();
