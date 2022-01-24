$(document).ready(()=>{

    $("#btn").click(()=>{

        $("p").animate({
            "font-size":"20pt",
            color: "red"
        }, 2000, ()=>{
            $("p").css({
                "text-decoration": "underline"
            }, 1500, ()=>{
                // NO ENTRA AQUÍ
                console.log("a");
                $("p").animate({
                    "font-size": "0.75em"
                }, 1500)
            });
        });
        
    });

});

/* $(document).ready(()=>{

    $("button").click(()=>{
        $("#img").fadeOut(2000, ()=>{
            $("#img").slideDown(3000);
            $("#img").slideUp(1000);

        });
    })

}); */