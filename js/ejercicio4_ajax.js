$(document).ready(()=>{
    $("#btn").click(()=>{
        $.post( "script.php", 
        {nombre: "Andrea", apellidos: "Martin"})
        .done(function(data) {
            $("#container").html(data);
        })
    });

})