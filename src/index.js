const btnContinue = document.getElementById("btnContinue");
btnContinue.addEventListener("click", () => {
  const hidden = document.getElementById("root");
  const show = document.getElementById("sec_cipher");
  hidden.style.display = "none";
  show.style.display = "block";
});

/********************/
document.getElementById("btnCifrarTexto").addEventListener("click", () => {
  let string = document.getElementById("text_cip").value;
  let offset = parseInt(document.getElementById("offset").value);
  let text_result = document.getElementById("text_result");
  text_result.innerHTML = cipher.encode(offset, string);
});
/********************/
document.getElementById("btnDecifrarTexto").addEventListener("click", () => {
  let string = document.getElementById("text_cip").value;
  let offset = parseInt(document.getElementById("offset").value);
  let text_result = document.getElementById("text_result");
  text_result.innerHTML = cipher.decode(offset, string);
});

/********************/
//BOTON COPIAR TEXTO
document.getElementById("btnCopyText").addEventListener("click", () => {
  const x = document.createElement("input");
  x.setAttribute("value", document.getElementById("text_result").innerHTML);
  document.body.appendChild(x);
  x.select();
  document.execCommand("copy");
  document.body.removeChild(x);
})

