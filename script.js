const form = document.querySelector(".form");
const formCriptografado = document.querySelector(".descriptografado");
const btnCriptografar = document.querySelector(".criptografar");
const btnDescriptografar = document.querySelector(".descriptografar");
let textoCriptografado = document.querySelector(".digitartexto");
let textoDescriptografado = document.querySelector(".textodescriptogrado");

const pegarTexto = (e) => {
  e.preventDefault();
  const textoCriptografado = `${textoCriptografado.value} 123`;
};

const btnCriptografarClicked = (e) => {
  e.preventDefault();
  pegarTexto(e);
  form.reset();
};

const pegarTextoDescriptografado = (e) => {
  e.preventDefault();
  btnCriptografarClicked(e);
  const textoCriptografado = `${textoCriptografado.value} 123`;
};

const btnDescriptografarClicked = (e) => {
  e.preventDefault();
  pegarTextoDescriptografado(e);
  form.reset();
};

form.addEventListener("submit", pegarTexto);
formCriptografado.addEventListener("submit", pegarTextoDescriptografado);
btnCriptografar.addEventListener("click", btnCriptografarClicked);
btnDescriptografar.addEventListener("click", btnDescriptografarClicked);
