// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = []; 
let amigosDisponibles = []; 

function agregarAmigo() {  
  let inputAmigo = document.getElementById("amigo");  
  let nombreAmigo = inputAmigo.value.trim();  
  let regex = /^[a-zA-Z\s]*$/;

  if (!nombreAmigo) {  
    alert("Por favor, ingrese un nombre.");  
    return;  
  }

  if (!regex.test(nombreAmigo)) {  
    alert("El nombre solo puede contener letras y espacios.");  
    return;  
  }

  if (amigo.includes(nombreAmigo)) {  
    alert("Este amigo ya fue agregado.");  
    return;  
  }

  amigo.push(nombreAmigo);
  amigosDisponibles.push(nombreAmigo);
  inputAmigo.value = "";
  inputAmigo.focus();
  mostrarAmigos();
}

function mostrarAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  amigosDisponibles.forEach(nombre => {
    let item = document.createElement("li");
    item.textContent = nombre;
    listaAmigos.appendChild(item);
  });
}

function sortearAmigo() {
  if (amigosDisponibles.length === 0) {
    alert("Todos los amigos han sido sorteados. Reiniciando el juego...");
    reiniciarJuego();
    return;
  }

  let indiceSorteado = Math.floor(Math.random() * amigosDisponibles.length);
  let amigoSorteado = amigosDisponibles.splice(indiceSorteado, 1)[0];

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

  mostrarAmigos();
}

function reiniciarJuego() {
  amigo = [];
  amigosDisponibles = [];
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
  alert("Puede volver a ingresar nombres.");
}

