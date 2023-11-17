let queryString = window.location.search
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");

let acaVaLaAPIKey = "da259f077f66712b0dd2a2dacc20a03d"

let urlDetalleSerie = `https://api.themoviedb.org/3/tv/${id}?api_key=${acaVaLaAPIKey}`

fetch(urlDetalleSerie)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);

    let detalleSerie = document.querySelector (".section-detalles-serie")
    let detalleSerieHTML = ""

        detalleSerieHTML += `<article class= "detalles-album-informacion">
        <img class="detalles-album-imagen" src= ${data.cover_big}>
        <ul class="detalles-album-texto" >
        <li><h2> Album: ${data.title}</h2></li>
        <li><h3> Artista: <a class="detalles-album-link" href="detalles-artistas.html?id=${data.artist.id}">${data.artist.name}</a></h3></li>
        <li><h3> Genero: <a class="detalles-album-link" href="detail-genres.html?id=${data.genres.data[0].id}">${data.genres.data[0].name}</a></h3></li>
        <li><h3> Fecha de publicación: ${data.release_date}</h3></li>
        </ul>`

    detalleSerie.innerHTML = detalleSerieHTML;

})
.catch(function(error){
    console.log("Error: " + error);
})