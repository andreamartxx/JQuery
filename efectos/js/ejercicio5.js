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
                    "font-size": "5pt"
                }, 1900)
            });
        });
        
    });

});