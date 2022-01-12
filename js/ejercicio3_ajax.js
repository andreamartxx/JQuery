$(document).ready(()=> {

    $("#boton").click(()=>{
        $.get("../libros.xml", function (data) {
            $(data).find("Libro").each(function () {
                var autor = $(this).find("Autor").text();
                var titulo = $(this).find("Titulo").text();
                $("#contenedor").append(`<li>${autor} -> ${titulo}</li>`);
            });
        });
    });
    
});