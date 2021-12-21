$(document).ready(()=>{

    $("button").click(()=>{
        $("#img").fadeOut(2000, ()=>{
            $("#img").slideDown(3000);
            $("#img").slideUp(1000);

        });
    })

});