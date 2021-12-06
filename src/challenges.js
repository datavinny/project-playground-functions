// Desafio 1
function compareTrue(valor1, valor2) {
  if(valor1 === true && valor2 === true) {
    return true;
  }
  else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}
// Desafio 3
function splitSentence(sliptsentence) {
  let splits = sliptsentence.split(' ', )
  return splits
}
// Desafio 4
function concatName(strings) {
return strings[strings.length-1] + ', ' + strings[0]
}
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let vitoria = wins * 3;
  let empate = ties * 1;
  let pontos = vitoria + empate;
  return pontos 
}
// Desafio 6
function highestCount(valores) {
  let highestStreak = 1;
  let armazem = 0;
  for (let counter = 0; counter < valores.length; counter += 1) {
      if (armazem < valores[counter]) {
      armazem = valores[counter];
      highestStreak = 1;
      }
      else if (armazem === valores[counter]) {
        if(counter === 0) {
          highestStreak -= 1;
        }
        highestStreak += 1;
      }
    }
    return highestStreak
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
 let distancia1 = mouse - cat1;//1 - 0
 let distancia2 = mouse - cat2 ;// 1 - 2


if (cat1 > mouse) {
  distancia1 = cat1 - mouse
}
else if (cat2 > mouse) {
  distancia2 = cat2 - mouse
}

 if (distancia1 < distancia2) {
   return "cat1"
 }
 else if (distancia2 < distancia1) {
   return "cat2"
 }
 else if (distancia1 === distancia2){
   return "os gatos trombam e o rato foge"
 }
}
// Desafio 8
function fizzBuzz(numeros) {
  let result = [];

  for (let counter = 0; counter < numeros.length; counter += 1) {

    if (numeros[counter] % 5 === 0 && numeros[counter] % 3 === 0) {
      result.push("fizzBuzz")
    }
    else if (numeros[counter] % 3 === 0) {
      result.push("fizz")
    }
    else if (numeros[counter] % 5 === 0) {
      result.push("buzz")
    }
    else {
      result.push("bug!")
    }
  }
  return result
}
// Desafio 9
function encode(string) {
  // for(let index = 0; index < string.length; index += 1) {
  //   if (string[index] === 'a') {
  //     string[index] = '1';
  //   }
  //   else if (string[index] === 'e') {
  //     string[index] = '2';
  //   }
  //   else if (string[index] === 'i') {
  //     string[index] = '3';
  //   }
  //   else if (string[index] === 'o') {
  //     string[index] = '4';
  //   }
  //   else if (string[index] === 'u') {
  //     string[index] = '5';
  //   } 
  // }
  let newstring = string.replace(/a/g,'1');
  newstring = newstring.replace(/e/g,'2');
  newstring = newstring.replace(/i/g,'3');
  newstring = newstring.replace(/o/g,'4');
  newstring = newstring.replace(/u/g,'5');
  return newstring
}
function decode(string2) {
  let newstring2 = string2.replace(/1/g,'a');
  newstring2 = newstring2.replace(/2/g,'e');
  newstring2 = newstring2.replace(/3/g,'i');
  newstring2 = newstring2.replace(/4/g,'o');
  newstring2 = newstring2.replace(/5/g,'u');
  return newstring2
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
