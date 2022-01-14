$(document).ready(()=>{

    $("#boton").click(()=>{
        $.ajax({
            type: "GET",
            url: "../Ej1/texto.txt",
            success: function (response) {
             $("#contenedor").text(response);
            },
            error: function(){
                alert("Error al traer el fichero de texto");
            }
     
         });
    });

});