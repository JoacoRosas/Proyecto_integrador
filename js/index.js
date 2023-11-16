let acaVaLaAPIKey = "da259f077f66712b0dd2a2dacc20a03d"
let urlPeliculas= `https://api.themoviedb.org/3/movie/popular?api_key=${acaVaLaAPIKey}`

fetch(urlPeliculas)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);

        let peliculas = document.querySelector('.lista-peliculas')
        let arrayPeliculas = data.results
        let peliculasHTML = ''

        for(let i = 0; i < 10; i++){
            peliculasHTML += `<li>
            <article class = "article-lista-movie">
            <a class="enlace-lista-movie" href="detalle-movie.html?id=${arrayPeliculas[i].id}">
            <h2 class="titulo-lista-movie"> ${arrayPeliculas[i].title} </h2>
            <img src="https://image.tmdb.org/t/p/w500${arrayPeliculas[i].poster_path}" width="400" height="600" alt="${arrayPeliculas[i].title} Poster">
            <p>${arrayPeliculas[i].release_date}</p>
            </a>
            </article>
            </li>`
        }
        peliculas.innerHTML = peliculasHTML;
    })
    .catch(function(error){
        console.log("Error: " + error);
    }) 


///SERIES///
let urlSeries = `https://api.themoviedb.org/3/tv/popular?api_key=${acaVaLaAPIKey}`

fetch(urlSeries)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);

        let series = document.querySelector('.lista-series')
        let arraySeries = data.results
        let seriesHTML = ''

        for(let i = 0; i < 5; i++){
            seriesHTML += `<li>
            <article class = "article-lista-movie">
            <a class="enlace-lista-movie" href="detalle-serie.html?id=${arraySeries[i].id}">
            <h2 class="titulo-lista-movie"> ${arraySeries[i].original_name } </h2>
            <img src="https://image.tmdb.org/t/p/w500${arraySeries[i].poster_path}" width="400" height="600" alt="${arraySeries[i].original_name} Poster">
            <p>${arraySeries[i].first_air_date}</p>
            </a>
            </article>
            </li>`
        }
        series.innerHTML = seriesHTML;
    })
    .catch(function(error){
        console.log("Error: " + error);
    }) 





///BUSCADOR///


let formulario = document.querySelector(".formulario")
let buscador = document.querySelector('[name=buscar]')
formulario.addEventListener('submit', function(e){
    e.preventDefault()})