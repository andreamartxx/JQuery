$.fn.arrastrar = function() {
    return this.each(function(){
      elem = $(this);
      elem.draggable();
   });
};

$(document).ready(function(){
    
    $(".draggable").arrastrar();
   

})