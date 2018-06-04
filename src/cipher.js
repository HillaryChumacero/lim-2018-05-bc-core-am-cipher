window.cipher = {
  encode: (offset, string) => {
    ///
    offset = parseInt(offset);
    offset = offset % 26;
    let texto = ''; //var donde estara el result

    for (let i = 0; i < string.length; i++) {
      let valCipher = string.charCodeAt(i); //ascii
      let x; //valor
      if ((valCipher >= 65) && (valCipher <= 90)) { //mayus
        x = (valCipher - 65 + offset) % 26 + 65;
      } else if ((valCipher >= 97) && (valCipher <= 122)) { // minusc
        x = (valCipher - 97 + offset) % 26 + 97;
      } else {
        x = valCipher;
      }
      texto += String.fromCharCode(x);
    }
    return texto;
  },

  decode: (offset, string) => {
    ///
    let texto = '';
    offset = offset % 26;
    for (let i = 0; i < string.length; i++) {
      let valCipher = string.charCodeAt(i);
      let x;
      if ((valCipher >= 65) && (valCipher <= 90)) {
        x = (valCipher - 65 - offset + 26) % 26 + 65;
      } else if ((valCipher >= 97) && (valCipher <= 122)) {
        x = (valCipher - 97 - offset + 26) % 26 + 97;
      } else {
        x = valCipher;
      }
      texto += String.fromCharCode(x);
    }
    return texto;
  },

  createCipherWithOffset(offset) {
    return {
      encode(string) { return cipher.encode(offset, string); },
      decode(string) { return cipher.decode(offset, string); }
    };
  }


};


 // window.cipher = {
 //   encode: (offset, string) => {
 //     offset = parseInt(offset);
 //     let texto = '';
 //     offset = offset % 26;
 //     for(let i=0 ; i < string.length ; i++) {
 //       let valCipher = string.charCodeAt(i);
 //       let x;
 //       if((valCipher >= 65) && (valCipher <= 90)){
 //         x = (valCipher-65+offset)%26+65;
 //       }else if((valCipher >= 97) && (valCipher <= 122)){
 //         x = (valCipher-97+offset)%26+97;
 //       }else {
 //         x = valCipher;
 //       }
 //         texto += String.fromCharCode(x);
 //     }
 //     return texto;
 //   },
 //   decode: (offset, string) => {
 //     let texto = '';
 //     offset = offset % 26;
 //     for(let i=0 ; i < string.length ; i++) {
 //       let valCipher = string.charCodeAt(i);
 //       let x;
 //       if((valCipher >= 65) && (valCipher <= 90)){
 //         x = (valCipher-65-offset+26)%26+65;
 //       }else if ((valCipher >= 97) && (valCipher <= 122)) {
 //         x = (valCipher-97-offset+26)%26+97;
 //       }else {
 //         x=valCipher;
 //       }
 //       texto += String.fromCharCode(x);
 //     }
 //     return texto;
 //   },  
 //   createCipherWithOffset: () => {
 //      /* */
 //   }
 // };
