// Una variable que contenga la lista de la compra ( minimo 5 elementos)

const listaCompra = ["mermelada", "banana", "frutilla", "cereales", "leche"]

console.log(listaCompra)

 //Modifica la lista de la compra y añádele "Aceite de Girasol"

 listaCompra.push ("Aceite de girasol")
 console.log(listaCompra)

 //Modifica la lista de la compra eliminando "Aceite de girasol"

 listaCompra.pop("Aceite de girasol")
 console.log(listaCompra)
 
 // Una lista de tus 3 peliculas favoritas (Objetos con propiedades : titulo, director,fecha)

 const peliculasFavoritas = [ 
    { titulo:"Titanic", director:"James Cameron", fecha: 1996 },
    { titulo:"El rey leon", director:"Disney", fecha: 1995 },
    { titulo:"Avatar", director:"James Cameron", fecha: 2009}
 ]

 console.log(peliculasFavoritas)

 //Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)


 const peliculas = [
    { titulo:"Los Vengadores", director:"James Cameron", fecha:2012},
    { titulo:"American pie", director:"Disney", fecha: 2013 },
    { titulo:"Avengers", director:"James Cameron", fecha: 2014 }
 ]
const peliPosterior =  peliculas.filter (año => año.fecha > 2010)
console.log(peliPosterior)

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
 
const directores = [
    {director:"James cameron"},
    {director:"Anthony Ruso"},
    {director: "Rob Minkoff"},
    {director:"Edgar rize"}
] 

const directoresOriginal = directores.map (elementos => elementos.director)
console.log(directoresOriginal)

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

const titulosPeli = [
    {titulo:"titanic"},
    {titulo:"el rey leon"},
    {titulo:"avatar"},
    {titulo:"avengers"}
]

const movieTitle =titulosPeli.map ( elementos => elementos.titulo )
console.log(movieTitle)

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

const directores1 = [
    {director:"James cameron"},
    {director:"Anthony Ruso"},
    {director: "Rob Minkoff"},
    {director:"Edgar rize"}
] 

const titulosPeli2 = [
    {titulo:"titanic"},
    {titulo:"el rey leon"},
    {titulo:"avatar"},
    {titulo:"avengers"}
]

console.log(directores1.concat(titulosPeli2))


//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

 const lista1 = [
    {director:"James cameron"},
    {director:"Anthony Ruso"},
    {director: "Rob Minkoff"},
    {director:"Edgar rize"}
] 

const lista2 = [
    {titulo:"titanic"},
    {titulo:"el rey leon"},
    {titulo:"avatar"},
    {titulo:"avengers"}
]

const lista3 = lista1.concat(lista2)
console.log(...lista3)
