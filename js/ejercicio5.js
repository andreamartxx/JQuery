$(document).ready(()=>{

    $("p").mouseover((e)=>{
        $("p").addClass("parrafo");
    });

    $("p").mouseout((e)=>{
        $("p").removeClass("parrafo");
    });

});