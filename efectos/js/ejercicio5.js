$(document).ready(()=>{

    $("#btn").click(()=>{

        $("p").animate({
            "font-size":"20pt",
            color: "red"
        }, 2000)

        $("p").queue(()=>{
            $("p").css("text-decoration", "underline");
            $("p").dequeue();
        });

        $("p").animate({
            "font-size":"10pt",
            color: "green"
        }, 2100)
        
    });

});