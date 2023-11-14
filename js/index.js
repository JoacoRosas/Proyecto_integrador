let api_key = "da259f077f66712b0dd2a2dacc20a03d"

let urlPeliculas = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`

console.log(urlPeliculas);


fetch(urlPeliculas)
    .then(function(response){
        response.json()
    })
    .then(function(data){
        console.log(data);

        let peliculas = document.querySelector('.lista-peliculas')
        let arrayPeliculas = data.results //ver//
        let peliculasHTML = ''

        for(let i = 0; i <arrayPeliculas.length; i++){
            peliculasHTML =+ `<li>
            <article class = "article-lista-movie">
            <a class="enlace-lista-movie" href="detalle-movie.html?id=${arrayPeliculas[i].id}">
            <h2 class="titulo-lista-movie"></h2>
            <img src= 
            </a>
            </article>
            </li>`
        }
        peliculas.innerHTML = peliculasHTML;
    })

    .catch(function(error){
        console.log("Error: " + error);
    }) 



let formulario = document.querySelector(".formulario")
let buscador = document.querySelector('[name=buscar]')
 
formulario.addEventListener('submit', function(e){
    e.preventDefault()})