let queryString = window.location.search
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("");


let acaVaLaAPIKey = "da259f077f66712b0dd2a2dacc20a03d"

let urlGeneros= `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}api_key=${acaVaLaAPIKey}`

fetch (urlGeneros)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);

    let generos= document.querySelector (".genero-section");
    let arrayGeneros= data.results
    let generosHTML= ""
    
    for(let i=0;i<arrayGeneros.length;i++){
        generosHTML += `
        <article class= "home-article">
        <a class="link-color" href="detalle-generos.html?id=${arrayGeneros[i].id}">
        <img src= ${arrayGeneros[i].m}>
        <h2 class="home-texto" >${arrayGeneros[i].n}</h2>
        </a>
        </article>`
    }
    generos.innerHTML=generosHTML
})

.catch(function(error){
    console.log("Error:"+ error);
})
