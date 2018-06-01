const btnContinue = document.getElementById("btnContinue");
btnContinue.addEventListener("click",() => {
  const hidden = document.getElementById("root");
  const show = document.getElementById("sec_cipher");
  hidden.style.display = "none";
  show.style.display = "block";
});

/********************/
document.getElementById("btnCifrarTexto").addEventListener("click", () =>{
  let string = document.getElementById("text_cip").value;
  let offset = parseInt(document.getElementById("offset").value);
  let text_result = document.getElementById("text_result");
text_result.innerHTML = cipher.encode(offset, string);
});
/********************/
document.getElementById("btnDecifrarTexto").addEventListener("click", () =>{
  let string = document.getElementById("text_cip").value;
  let offset = parseInt(document.getElementById("offset").value);
  let text_result = document.getElementById("text_result");
  text_result.innerHTML = cipher.decode(offset, string);
});













// document.getElementById("btnCifrarTexto").addEventListener("click", () =>{
//   const string = document.getElementById("string").value;
//   const offset = parseInt(document.getElementById("offset").value);
//   const text_result = document.getElementById("text_result");
// text_result.innerHTML = cipher.encode(offset, string);
// });
// /********************/
// document.getElementById("btnDecifrarTexto").addEventListener("click", () =>{
//   const string = document.getElementById("string").value;
//   const offset = parseInt(document.getElementById("offset").value);
//   const text_result = document.getElementById("text_result");
//   text_result.innerHTML = cipher.decode(offset, string);
// });

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

/********************/
//BUTTON CIFRAR-TEXTO
// const btnCifrarTexto = document.getElementById("btnCifrarTexto");
// btnCifrarTexto.addEventListener("click",resultCifrarTexto);
// function resultCifrarTexto(){ debugger
// const ocultocif =    document.getElementById("container-back-encode");
// const ocultodescif = document.getElementById("container-back-decode");
// const muestra=       document.getElementById('container-result');

// muestra.style.display = "block";
// ocultocif.style.display="none";
// ocultodescif.style.display="none";

// var Numero= document.getElementById('offset').value;
// var Text= document.getElementById('text_cif').value;

// alert(""+Numero);
// alert(""+Text);

// var respuesta = encode(Text);
// alert(respuesta);

// }



// //BUTTON DESCIFRAR-TEXTO
// const btnDescifrarTexto = document.getElementById("btnDescifrarTexto");
// btnDescifrarTexto.addEventListener("click",resultDescifrarTexto);
// function resultDescifrarTexto(){ debugger
// const ocultocif =    document.getElementById("container-back-encode");
// const ocultodescif = document.getElementById("container-back-decode");
// const muestra=       document.getElementById('container-result');

// muestra.style.display = "block";
// ocultocif.style.display="none";
// ocultodescif.style.display="none";

// var Numero=       document.getElementById('offset').value;
// var Text=       document.getElementById('text_descif').value;

// alert(""+Numero);
// alert(""+Text);

// var respuesta = decode(Text);
// alert(respuesta);

// }
// //RESULTADO


// /////
//   var offset = document.getElementById("offset");
//   var resultadotext= "";

// function encode(texto){ 
//   var resultadotext="";
//   for(var i=0; i< texto.length; i++){
//     resultadotext += texto.charCodeAt(i)+" ";
//   }
//   return resultadotext.trim();
// }

// function decode(texto){
//   var textosplit=texto.split(" ");
//   var temp = new Array();
//   temp = textosplit(" ");

//   for (a in temp ) {
//     temp[a] = parseInt(temp[a], 10); 
//   }

//   for(var i=0; i< temp.length; i++){
//     resultadotext += texto.charCodeAt(i)+" ";
//   }
//   var resultadotext = String.fromCharCode(textosplit);
//   return resultadotext.trim();

// }
// // let string, offset;

// //    //////para ocultar y mostrar un div
// // <a href="#" onclick="ocultar()">Oculta la capa 1</a>
// //     <a href="#" onclick="mostrar()">Muestra la capa 1</a>
