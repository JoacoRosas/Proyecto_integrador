let acaVaLaAPIKey = "da259f077f66712b0dd2a2dacc20a03d"
let urlBuscador = `https://api.themoviedb.org/3/search/movie?api_key=${acaVaLaAPIKey}&query=${buscar}`


let queryString = location.search
let queryStringObj = new URLSearchParams(queryString)
let busqueda = queryStringObj.get("buscar")
let resultados = document.querySelector('.resultados')

fetch(urlBuscador)
    .then(function(response){
        response.json()
    })
    .then(function(data){
        console.log(data);

        for (let i = 0; i < data.lenght; i++){
            contenido +=`<article class = "resultados" >
                        <p class = "titulo-busqueda">
                        <a class = "search-results" href = "detalle-movie.html?
                        
                        </a>
                        </p>
                        </article>
            `
        }
        
     })
    .catch(function(error){
        console.log("Error: " + error);
    })