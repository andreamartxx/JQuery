$(document).ready(()=>{

    $("#boton").click(()=>{

        $.ajax({
            type: "GET",
            url: "../Ej2/script.php",
            success: function (response) {
             $("#contenedor").html(response);
            },
            error: function(){
                alert("Error al traer el fichero de texto");
            }
     
         });

    });

});