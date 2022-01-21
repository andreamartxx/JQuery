$(document).ready(function () {
    $("#boton").on("click", ()=> {
    $.getJSON("https://catfact.ninja/fact", (data)=> {
    $("#contenedor").html(data.fact);
    });
})
});