$(document).ready(()=>{

    $("button").click(()=>{
        $.ajax({
            type: "GET",
            url: "../texto.txt",
            success: function (response) {
             $("#contenido").text(response);
            }
     
         });
    });
    
    
});