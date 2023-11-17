let queryString = window.location.search
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");

let acaVaLaAPIKey = "da259f077f66712b0dd2a2dacc20a03d"

let urlDetalleMovie= `https://api.themoviedb.org/3/movie/${id}?api_key=${acaVaLaAPIKey}`


fetch(urlDetalleMovie)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        let detalleMovie = document.querySelector(".section-detalle-Movie")
        let arrayDetMovie = data.genres
        let detalleMovieHTML = ""

        for(let i = 0; i < arrayDetMovie.length; i++){
            detalleMovieHTML += `<article class= "detalles-serie-informacion">
            <img class="detalles-Movie-imagen" src= ${data.backdrop_path}>
            <ul class="detalles-Movie-texto" >
            <li><h2> Nombre: ${data.name}</h2></li>
            <li><p> Calificación: ${data.popularity}<p></li>
            <li><p> Fecha de estreno: ${data.first_air_date}<p></li>
            <li><p> Sinópsis: ${data.overview}<p></li>
            <li><h3> Genero: <a class="detalles-Movie-link" href="detalle-generos.html?id=${data.id}">${data.name}</a></h3></li>
            </ul>`
        }

        detalleMovie.innerHTML = detallenMovieHTML;
        

    })
    .catch(function (error) {
        console.log("Error: " + error);
    })