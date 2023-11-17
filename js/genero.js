
//TV

let queryString = window.location.search
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");

let acaVaLaAPIKey = "da259f077f66712b0dd2a2dacc20a03d"

let urlGenerosMovies = `https://api.themoviedb.org/3/genre/movie/list?api_key=${acaVaLaAPIKey}`
let urlGenerosTv = `https://api.themoviedb.org/3/genre/tv/list?api_key=${acaVaLaAPIKey}`

fetch (urlGenerosMovies)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);

    // let generos= document.querySelector (".genero-section");
    // let arrayGeneros = data.results
    // let generosHTML= ""
    
    // for(let i=0;i<arrayGeneros.length;i++){
    //     generosHTML += `
    //     <article class= "home-article">
    //     <a class="link-color" href="detalle-generos.html?id=${arrayGeneros[i].id}">
    //     <img src= ${arrayGeneros[i].m}>
    //     <h2 class="home-texto" >${arrayGeneros[i].n}</h2>
    //     </a>
    //     </article>`
    // }
    // generos.innerHTML=generosHTML
})

.catch(function(error){
    console.log("Error:"+ error);
})



fetch (urlGenerosTv)    
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);

    // let generos= document.querySelector (".genero-section");
    // let arrayGeneros = data.results
    // let generosHTML= ""
    
    // for(let i=0;i<arrayGeneros.length;i++){
    //     generosHTML += `
    //     <article class= "home-article">
    //     <a class="link-color" href="detalle-generos.html?id=${arrayGeneros[i].id}">
    //     <img src= ${arrayGeneros[i].m}>
    //     <h2 class="home-texto" >${arrayGeneros[i].n}</h2>
    //     </a>
    //     </article>`
    // }
    // generos.innerHTML=generosHTML
})

.catch(function(error){
    console.log("Error:"+ error);
})
