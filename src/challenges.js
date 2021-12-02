// Desafio 1
function compareTrue(valor1, valor2) {
  if(valor1 === true && valor2 === true){
    return true;
  }
  else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2
}
// Desafio 3
function splitSentence(string) {
  // seu código aqui
}

// Desafio 4
function concatName(arraystring) {
  // seu código aqui
return arraystring[arraystring.length-1] + ', ' + arraystring[0]
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let vitoria = wins * 3
  let empate  = ties * 1
  let pontos = vitoria + empate
  return pontos + ' pontos'
}
// Desafio 6
function highestCount() {
  // seu código aqui
}

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
