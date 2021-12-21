$(document).ready(()=>{

    $("#checkboxForm").click(()=>{
      if($("#checkboxForm").prop("checked")){
        var suma = parseInt($("#num1Form").val()) + parseInt($("#num2Form").val());
        $("#contenido").append("<input type='text' id='suma' value='"+suma+"'> ")
    }else{
        $("#suma").remove();
    }
    });

});