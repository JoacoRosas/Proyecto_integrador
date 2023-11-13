let urlPeliculas = 'url'

fetch(`url=${movie}`)
    .then(function(response){
        response.json()
    })
    .then(function(data){
        console.log(data);


        let peliculas = document.querySelector('.lista-peliculas')
        let arrayPeliculas = data.data //ver//
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