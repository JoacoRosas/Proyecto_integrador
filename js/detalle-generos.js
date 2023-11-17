let queryString = window.location.search
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");



let urlDetallesGeneroMovie = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'

fetch(urlDetallesGeneroMovie)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);

    let detallesGenero= document.querySelector(".movie-detalle-genero");
    let arrayDetallesGenero= data.results
    let detallesGeneroHTML= ''

    for(let i=0; i<arrayDetallesGenero.length; i++){
        detallesGeneroHTML += `<article class="home-article">
        <a class="link-color" href="detalle-movie.html?id=${arrayDetallesGenero[i].id}">
        <img src=${arrayDetallesGenero[i].poster_path}>
        <h3 class="home-texto" >${arrayDetallesGenero[i].name}</h3></a>
        </article>`
    }
    detallesGenero.innerHTML= detallesGeneroHTML;

})
.catch(function(error){
    console.log("Error: " + error);
})

let qsGenero = window.location.search
let qsGeneroObj = new URLSearchParams(qsGenero);
let idGenero = qsGeneroObj.get("id");

let urlGeneroDetalleTV = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc'

fetch(urlGeneroDetalleTV)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);

    let detallesGenero= document.querySelector(".serie-detalle-genero");
    let arrayDetallesGenero= data.results
    let detallesGeneroHTML= ''

    for(let i=0; i<arrayDetallesGenero.length; i++){
        detallesGeneroHTML += `<article class="home-article">
        <a class="link-color" href="detalle-serie.html?id=${arrayDetallesGenero[i].id}">
        <img src=${arrayDetallesGenero[i].poster_path}>
        <h3 class="home-texto" >${arrayDetallesGenero[i].name}</h3></a>
        </article>`
    }
    detallesGenero.innerHTML= detallesGeneroHTML;

})
.catch(function(error){
    console.log("Error: " + error);
})