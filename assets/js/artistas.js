var divNombre  = document.getElementById('nombre')
var divEdad  = document.getElementById('edad')
var divCiudad  = document.getElementById('ciudad')
var divGenero  = document.getElementById('genero')

function Dardatos(){
var nombre = prompt('Escribe el nombre del artista')
var edad = prompt('Escribe la edad del artista')
var ciudad = prompt('Escribe la cidad del artista')
var genero = prompt ('Escribe el genero musical del artista') 

var MensajeNombre = 'Nombre: ' + nombre
divNombre.innerText = MensajeNombre

var MensajeEdad = 'Edad: ' + edad
divEdad.innerText = MensajeEdad

var MensajeCiudad = 'Ciudad: ' + ciudad
divCiudad.innerText = MensajeCiudad

var MensajeGenero = 'Genero: ' + genero
divGenero.innerText = MensajeGenero

}