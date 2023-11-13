let queryString = location.search
let queryStringObj = new URLSearchParams(queryString)
let busqueda = queryStringObj.get("buscar")
let resultados = document.querySelector('.resultados')
let contenido = ''

let titulo = document.querySelector('.titulo-busqueda')
titulo.innerHTML += buscar


fetch(`url`)
    .then(function(response){
        response.json()
    })
    .then(function(data){
        console.log(data);

        for (let i = 0; i < data.lenght; i++){
            contenido +=`<article class = "resultados" >
                        <p class = "titulo-busqueda">
                        <a class = "search-results" href = "detalle-movie.html?//COMPLETAR//
                        
                        </a>
                        </p>
                        </article>
            `
        }
        
        resultados.innerHTML += contenido
        if(j)

        resultados.innerHTML = contenido
     })
    .catch(function(error){
        console.log("Error: " + error);
    })