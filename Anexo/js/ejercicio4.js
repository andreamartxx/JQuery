$(document).ready(()=>{
   
    $("#boton").submit(()=>{

        $.get({
            type: $("#formulario").attr('method'),
            url: $('#formulario').attr('action'),
            data: $('#formulario').serialize(),
            success: function(data){alert('Datos enviados');}
        });

    });
    
});