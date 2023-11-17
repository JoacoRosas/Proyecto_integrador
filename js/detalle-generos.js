let queryString = window.location.search
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");



let urlDetallesGeneroMovie = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"

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
        detallesGeneroHTML += 
        `<article class= "home-article">
         <a class="link-color" href="detalle-generos.html?id=${arrayGeneros[i].id}">
         <img src= ${arrayGeneros[i].m}>
         <h2 class="home-texto" >${arrayGeneros[i].n}</h2>
         </a>
         </article>`
    }
    detallesGenero.innerHTML= detallesGeneroHTML;

})
.catch(function(error){
    console.log("Error: " + error);
})