function convertToRoman(num) {
  let roman = "";    
  
  //Break number into Thousands, Hundereds, Tens and Ones
  let ones = num % 10;
  num = Math.floor(num / 10);
  console.log(num);
  let tens = num % 10;
  num = Math.floor(num / 10);
  console.log(num);
  let hundereds = num % 10;
  num = Math.floor(num / 10);
  console.log(num);
  let thousands = num % 10;
  
  console.log(thousands, hundereds, tens, ones);

  if(thousands > 0) {
    roman += 'M'.repeat(thousands);
  }

  if(hundereds > 0) {
    if(hundereds >= 1 && hundereds <= 3)
      roman += 'C'.repeat(hundereds);

    if(hundereds === 4)
      roman += 'CD';

    if(hundereds === 5)
      roman += 'D';

    if(hundereds >= 6 && hundereds <= 8)
      roman += 'D' + 'C'.repeat(hundereds - 5);
    
    if(hundereds === 9)
      roman += 'CM';
  }

  if(tens > 0) {
    if(tens >= 1 && tens <= 3)
      roman += 'X'.repeat(tens);

    if(tens === 4)
      roman += 'XL';

    if(tens === 5)
      roman += 'L';

    if(tens >= 6 && tens <= 8)
      roman += 'L' + 'X'.repeat(tens - 5);
    
    if(tens === 9)
      roman += 'XC';
  }

  if(ones > 0) {
    if(ones >= 1 && ones <= 3)
      roman += 'I'.repeat(ones);

    if(ones === 4)
      roman += 'IV';

    if(ones === 5)
      roman += 'V';

    if(ones >= 6 && ones <= 8)
      roman += 'V' + 'I'.repeat(ones - 5);
    
    if(ones === 9)
      roman += 'IX';
  }

  return roman;
}

convertToRoman(1363);