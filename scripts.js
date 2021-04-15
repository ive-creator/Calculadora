var primeiroValor = parseInt(prompt ('Digite o primeiro valor:'))
var segundoValor = parseInt(prompt ('Digite o segundo valor:'))
var operacao = prompt("Digite 1 para uma divisâo. Digite 2 para multiplicação. Digite 3 para soma. Digite 4 para subtração.")
if (operacao == 1 ) {
  var resultado = primeiroValor / segundoValor
  document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 2) {
  var resultado = primeiroValor * segundoValor
  document.write("<h2>" + primeiroValor + " * " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 3) {
  var resultado = primeiroValor + segundoValor
document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 4) {
  var resultado = primeiroValor - segundoValor
document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
} 
else {
  document.write("<h2>Opção Inválida</h2>")
}
// document.write - escrevendo na tela
// concatenação (juntar palavras com variáveis) - ("palavra" + variavel)
// == dois iguais é usado para comparação (diferente do = usado para fazer atribuição)
// if - condicional
// else - senão
// else if - 
