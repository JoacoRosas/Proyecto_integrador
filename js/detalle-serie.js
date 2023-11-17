let queryString = window.location.search
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");

let acaVaLaAPIKey = "da259f077f66712b0dd2a2dacc20a03d"

let urlDetalleSerie = `https://api.themoviedb.org/3/tv/${id}?api_key=${acaVaLaAPIKey}`

fetch(urlDetalleSerie)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        let detalleSerie = document.querySelector(".section-detalle-serie")
        let arrayDetSerie = data.genres
        let detalleSerieHTML = ""

        for(let i = 0; i < arrayDetSerie.length; i++){
            detalleSerieHTML += `<article class= "detalles-serie-informacion">
            <img class="detalles-serie-imagen" src= ${data.backdrop_path}>
            <ul class="detalles-serie-texto" >
            <li><h2> Nombre: ${data.name}</h2></li>
            <li><p> Calificación: ${data.popularity}<p></li>
            <li><p> Fecha de estreno: ${data.first_air_date}<p></li>
            <li><p> Sinópsis: ${data.overview}<p></li>
            <li><h3> Genero: <a class="detalles-serie-link" href="detalle-generos.html?id=${data.id}">${data.name}</a></h3></li>
            </ul>`
        }

        detalleSerie.innerHTML = detalleSerieHTML;
        console.log(detalleSerie);

    })
    .catch(function (error) {
        console.log("Error: " + error);
    })