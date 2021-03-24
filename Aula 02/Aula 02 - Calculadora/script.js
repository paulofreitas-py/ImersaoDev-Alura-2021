alert('+ = Soma\n- = Subtracão\n* = Multiplicação\n/ = Divisão')
var valor1 = parseFloat(prompt('Digite o 1° valor:'))
var op = prompt('Digite um operador:')
var valor2 = parseFloat(prompt('Digite um 2º valor:'))
if(op == '+'){
    var result = valor1 + valor2
    document.write('<h2>' , valor1 , ' + ' , valor2 , ' = ' , result , '</h2>')
    } // vírgula pode ser usada no lugar do +
else if(op == '-'){
  var result = valor1 - valor2
  document.write('<h2>' , valor1 , ' - ' , valor2 , ' = ' , result , '</h2>')
}
else if(op == '*'){
  var result = valor1 * valor2
  document.write('<h2>' , valor1 , ' x ' , valor2 , ' = ' , result , '</h2>')
}
else if(op == '/'){
  var result = valor1 / valor2
  document.write('<h2>' , valor1 , ' / ' , valor2 , ' = ' , result , '</h2>')
}
else{
  document.write('<h2>' , 'Tente Novamente' , '</h2>')
}