const textoIngresado = document.querySelector(".ingreso-del-texto");
const imagenpersona = document.querySelector(".resultado-imagen");
const resultadoTitulo = document.querySelector(".resultado-mensaje1");
const resultadoMensaje = document.querySelector(".resultado-mensaje2");

const botonEncriptar = document.querySelector(".boton1");
const botonDesencriptar = document.querySelector(".boton2");
const botonCopiar = document.querySelector(".boton-copiar");

const remplazar = [
  ["a", "ai"],
  ["e", "enter"],
  ["i", "imes"],
  ["o", "ober"],
  ["u", "ufat"],
];

function encriptarMensaje(mensaje) {
  let mensajeEncriptado = "";
  for (let i = 0; i < mensaje.length; i++) {
    let letra = mensaje[i];
    let encriptada = letra;
    for (let j = 0; j < remplazar.length; j++) {
      if (letra === remplazar[j][0]) {
        encriptada = remplazar[j][1];
        break;
      }
    }
    mensajeEncriptado += encriptada;
  }
  return mensajeEncriptado;
}

function desencriptarMensaje(mensaje) {
  let mensajeDesencriptado = mensaje;
  for (let i = 0; i < remplazar.length; i++) {
    let Regex = new RegExp(remplazar[i][1], "g");
    mensajeDesencriptado = mensajeDesencriptado.replace(Regex, remplazar[i][0]);
  }
  return mensajeDesencriptado;
}

textoIngresado.addEventListener("input", (e) => {
  imagenpersona.style.display = "none";
  resultadoTitulo.textContent = "Capturando mensaje ...";
  resultadoMensaje.textContent = "";
});

botonEncriptar.addEventListener("click", (e) => {
  e.preventDefault();
  let mensaje = textoIngresado.value.toLowerCase();
  let mensajeEncriptado = encriptarMensaje(mensaje);
  resultadoMensaje.textContent = mensajeEncriptado;
  botonCopiar.classList.remove("oculto");
  resultadoTitulo.textContent = "El mensaje Encriptado es:";
});

botonDesencriptar.addEventListener("click", (e) => {
  e.preventDefault();
  let mensaje = textoIngresado.value.toLowerCase();
  let mensajeDesencriptado = desencriptarMensaje(mensaje);
  resultadoMensaje.textContent = mensajeDesencriptado;
  resultadoTitulo.textContent = "El mensaje desencriptado es:";
  botonCopiar.classList.remove("oculto");
});

botonCopiar.addEventListener("click", () => {
  let textoCopiado = resultadoMensaje.textContent;
  navigator.clipboard.writeText(textoCopiado).then(() => {
    imagenpersona.style.display = "none";
    resultadoTitulo.textContent = "¡el texto se copió!";
  });
});
