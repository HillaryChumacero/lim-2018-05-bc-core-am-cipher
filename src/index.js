
//BOTON CANCELAR
const btnCancelar = document.getElementById("btnCancelar");
btnCancelar.addEventListener("click", cancel); //()=> // function(){}
function cancel(){ debugger
  const hid = document.getElementById("root");
    const y= document.getElementById('container-back-encode');
    if(y.style.display==="block"){
        y.style.display="none";
     }// else{
    //     y.style.display="block";
    //     hid.style.display="none";
          
    }
    console.log(cancel); ///HEREEEEEE


//BOTON CIFRAR
const btnCifrar = document.getElementById("btnCifrar");
btnCifrar.addEventListener("click", cont_encode);
    function cont_encode() { debugger
    const hid = document.getElementById("root");
    const y= document.getElementById('container-back-encode');
    const text_cif= document.getElementById('text_cif');
    if(y.style.display==="block"){
        y.style.display="none";
    } else{
        y.style.display="block";
        hid.style.display="none";
        document.getElementById("text_cif").value = "";
          
    }
  }

//BUTTON CIFRAR-TEXTO
const btnCifrarTexto = document.getElementById("btnCifrarTexto");
btnCifrarTexto.addEventListener("click",result);

//BOTON DESCIFRAR
const btnDescifrar = document.getElementById("btnDescifrar");
btnDescifrar.addEventListener("click", cont_decode);
function cont_decode(){
const hid = document.getElementById("root");
const z= document.getElementById('container-back-decode');
const text_cif= document.getElementById('text_descif');
if(z.style.display==="block"){
    z.style.display="none";
} else{
    z.style.display="block";
    hid.style.display="none";
  document.getElementById("text_descif").value = "";
}}

//BUTTON DESCIFRAR-TEXTO
const btnDescifrarTexto = document.getElementById("btnDescifrarTexto");
btnDescifrarTexto.addEventListener("click",result);

//RESULTADO
function result(){
  debugger
const hid = document.getElementById("container-back-decode");
const hid2 = document.getElementById("container-back-encode");
const res= document.getElementById('container-result');
const text_cif= document.getElementById('text_cif');
const text_result = document.getElementById('text_salida');
document.getElementById("text_salida").value = "";
//
var offset = document.getElementById("offset");
var resultadotext= "";
function encode(){ debugger
  text_cif= text_cif.value.toUpperCase();
  for(var i=0; i<text_cif.length; i++){
    resultadotext += String.fromCharCode((text_cif.CharCodeAt(i) - 65 + parseInt(offset.value)) %26 +65);
    document.getElementById("text_salida").value = resultadotext;
  }
}

if(res.style.display==="block"){
  res.style.display="none";
} else{
  res.style.display="block";
 hid.style.display="none";
 hid2.style.display="none";
//  document.getElementById("text_salida").value = "";

}
}
console.log(result);



  function decode(){
    for (var i =0; i<text_cif.length; i++){
        resultadotext += String.fromCharCode((text_cif.CharCodeAt(i) - 65 - offset) %26 + 65);
      document.getElementById("text_salida").value = resultadotext;
    }
  }

// function prueba()
// {
// var campo=document.getElementById("dato").value;
 
// var prueba=document.getElementById("prueba");
// switch (campo) {
// case 'rojo': prueba.style.background="red";
// break;
// case 'verde':prueba.style.background="green";
// break;
// case 'azul':prueba.style.background="blue";
 
// }
// }

// function continuar(){
//     alert('AContinuemos, '+usuario+'!');
//     var x=document.getElementById('welcome');
//         if(x.style.display==="block"){
//            x.style.display="none";
//                }
//       else {
//     x.style.display="block";
//            }
//   }
//    //////para ocultar y mostrar un div
// <a href="#" onclick="ocultar()">Oculta la capa 1</a>
//     <a href="#" onclick="mostrar()">Muestra la capa 1</a>