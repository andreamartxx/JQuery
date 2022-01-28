$.fn.desaparece = function() {
    return this.each(function(){
      elem = $(this);
      elem.fadeOut(250)
   });
};


$(document).ready(function(){
    $("#btn").click(function(){
      $(".desaparece").desaparece();
   })

})