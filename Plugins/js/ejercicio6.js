/*widget DatePicker*/

$(document).ready(()=>{

    $( function() {
        $( "#datepicker" ).datepicker();
    });    

    $("#mascampos").generaNuevosCampos("Campo", "campo", 2);
})

jQuery.fn.generaNuevosCampos = function(etiqueta, nombreCampo, indice){
    $(this).each(function(){
       elem = $(this);
       elem.data("etiqueta",etiqueta);
       elem.data("nombreCampo",nombreCampo);
       elem.data("indice",indice);
       
       elem.click(function(e){
          e.preventDefault();
          elem = $(this);
          etiqueta = elem.data("etiqueta");
          nombreCampo = elem.data("nombreCampo");
          indice = elem.data("indice");
          texto_insertar = '<p>' + etiqueta + ' ' + indice + ':<br><input type="text" name="' + nombreCampo + indice + '" /></p>';
          indice ++;
          elem.data("indice",indice);
          nuevo_campo = $(texto_insertar);
          elem.before(nuevo_campo);
       });
    });
    return this;
 } 

