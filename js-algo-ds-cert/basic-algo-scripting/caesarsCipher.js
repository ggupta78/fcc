function rot13(str) { // LBH QVQ VG!
  //Declare decrypted string
  var decrypted = '';

  for (var index = 0; index < str.length; index++) {
      var charCode = str[index].charCodeAt();
      if (charCode >= 65 && charCode <= 90) {
        if (charCode >= 78)
            charCode = charCode - 13;
        else
            charCode = charCode + 13;
      }
      decrypted = decrypted + String.fromCharCode(charCode);
  }

  return decrypted;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
