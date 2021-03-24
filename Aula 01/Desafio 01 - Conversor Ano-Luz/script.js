var frase = "A distância de "
var frase1 = " anos luz é de "
var frase2 = " km."
var anosLuz = parseFloat(prompt("Qual a distância em anos luz? "))
var km = (anosLuz * 9460800000000).toFixed(2)
alert(frase + anosLuz + frase1  + km + frase2)