$(document).ready(()=>{

    var color = $("input[name=colorRadio]");

    color.change(function(){
        $("#parrafo").css("color", $(this).val());
    });

});