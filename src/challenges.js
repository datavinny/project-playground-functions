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
function splitSentence() {
  // seu código aqui
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
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
