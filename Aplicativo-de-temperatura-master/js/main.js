// Conversor Celsius: 
//para Kelvin
function CPK() {
    var C = parseInt(prompt("Digite a temperatura em Celsius para Kelvin"))
var K = C + 273
alert("a temperatura em K é "+ K + "Graus kelvin")
console.log("celsius " +C, "Kelvin "+K)
// Coloquei o console para verificar os valores.
}
//para Fahrenheit
function CPF() {

 var C = parseInt(prompt("Digite a temperatura em Celsius Para Fahrenheit"))
var F = (C * (1.8)) + 32

alert("a temperatura em F é "+ F +"graus fahrenheit")
console.log("celsius " +C,"Fahrenheit " + F)
}
//------------------------------------------------------------------------------
// Conversor Fahrenehit:
// para Celsius
function FPC() {
var F = parseInt(prompt("digite a temperatura em fahrenheit para celsius"))

var C = (F - 32) * 5/9

alert("a temperatura em é "+ C +" graus Celsius") 

console.log("Fahrenheit " + F,"celsius "+C)
}
// para Kelvin
function FPK() {
 var F = parseInt(prompt("digite a temperatura em fahrenheit para kelvin"))

 var K = (F - 32) * 5/9 + 273.15
    
  alert("a temperatura em é "+ K +" graus Kelvin")

console.log("Fahrenheit " + F,"Kelvin "+K)
}
//------------------------------------------------------------------------------
// Conversor Kelvin:
// para Fahrenheit
function KPF() {
    var K = parseInt(prompt("digite a temperatura Kelvin para fahrenheit"))

    var F = (K - 273) * (1.8) + 32

    console.log("Kelvin "+K,"Fahrenheit " + F)

    alert("A temperatura em Fahrenheit é de " + F + " Graus Fahrenheit")
} 
//para Celsius
function KPC() {
    var K = parseInt(prompt("digite a temperatura Kelvin para celsius"))

  var C = K - 273

  console.log("celsius "+C,"Kelvin "+K)

  alert("A temperatura em Celsius é de " + C + " Graus Celsius")
}

// Conversor de temperatura acima
//---------------------------------------------------------------------------
//Variação de temperatura abaixo
// Variação de Fahrenheit:
// Para Celsius
function VFC() {
    var VF = parseInt(prompt("digite a temperatura Kelvin para celsius"))

  var VC = (9/5)*VF


  alert("A variação temperatura de fahrenheit para celsius é de " + VC + " Graus")}
// Para Kelvin
function VFK() {
    var  VF = parseInt(prompt("digite a temperatura Kelvin para celsius"))

  var VK = (9/5)*VF 

  alert("A variação de temperatura de farenheit para kelvin é de " + VK + " Graus")}
 // ----------------------------------------------------------------------------------------- 
// Variação de Celsius:
// para Fahrenheit
function VCF() {
    var VC = parseInt(prompt("digite a temperatura Kelvin para celsius"))

  var VF = (VC*1.8)



  alert("A variação temperatura de celsius para fahrenheit é de " + VF + " Graus")}
// para Kelvin
function VCK() {
    var VC = parseInt(prompt("digite a temperatura Kelvin para celsius"))

  var VK = VC 



  alert("A variação de temperatura de Celsius e kelvin é de " + VK + " Graus")}
  //--------------------------------------------------------------------------------------------------
 // Variação de Kelvin:
 // Para Fahrenheit 
function VKF() {
    var VK = parseInt(prompt("digite a temperatura Kelvin para celsius"))

  var VF = (VK*1.8)


  alert("A variação temperatura de kelvin para fahrenheit é de " + VF + " Graus")}
//Para Celsius
function VKC() {
    var VK = parseInt(prompt("digite a temperatura Kelvin para celsius"))

  var VC = VK 

  alert("A variação de temperatura de kelvin para celsius é de " + VC + " Graus")}