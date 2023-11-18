let queryString = window.location.search
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");

let acaVaLaAPIKey = "da259f077f66712b0dd2a2dacc20a03d"

let urlDetallesGeneroMovie = `https://api.themoviedb.org/3/genre/${id}/movies?api_key=${acaVaLaAPIKey}`;




fetch(urlDetallesGeneroMovie)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);

        let detallesGenero= document.querySelector(".movie-detalle-generos");
        let arrayDetallesGenero= data.results;
        let detallesGeneroHTML= ''

        for(let i=0; i<arrayDetallesGenero.length; i++){
            detallesGeneroHTML += 
            `<article class= "home-article">
                <a class="link-color" href="detalle-movie.html?id=${arrayDetallesGenero[i].id}">
                    <img src=${"https://image.tmdb.org/t/p/w500/" + arrayDetallesGenero[i].poster_path} alt="${arrayDetallesGenero[i].title}">
                    <h2 class="home-texto">${arrayDetallesGenero[i].title}</h2>
                </a>
            </article>`;
        }
        detallesGenero.innerHTML= detallesGeneroHTML;

    })
    .catch(function(error){
        console.log("Error: " + error);
    })



let urlDetallesGeneroSerie = `https://api.themoviedb.org/3/discover/tv?api_key=${acaVaLaAPIKey}&with_genres=${id}`;
    
    fetch(urlDetallesGeneroSerie)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data);
    
            let detallesGenero= document.querySelector(".serie-detalle-generos");
            let arrayDetallesGenero= data.results;
            let detallesGeneroHTML= ''
    
            for(let i=0; i<arrayDetallesGenero.length; i++){
                detallesGeneroHTML += 
                `<article class= "home-article">
                <a class="link-color" href="detalle-serie.html?id=${arrayDetallesGenero[i].id}">
                    <img src=${"https://image.tmdb.org/t/p/w500/" + arrayDetallesGenero[i].poster_path} alt="${arrayDetallesGenero[i].title}">
                    <h2 class="home-texto">${arrayDetallesGenero[i].title}</h2>
                </a>
            </article>`;
            }
            detallesGenero.innerHTML= detallesGeneroHTML;
    
        })
        .catch(function(error){
            console.log("Error: " + error);
        })