$(document).ready(()=>{

    $("#btn").click(()=>{

        $("img").hide();
        
    });

    $("#btn1").click(()=>{

        $("img").show();
        
    });

    $("#btn2").click(()=>{

        $("img").toggle("fade");
        
    });
    
    $("#btn3").click(()=>{

        $("img").toggle("slide", "down", 2000);
        
    });

    $("#btn4").click(()=>{

        $("img").animate({
            height: 50,
            width: 500
        }, 2500 );
      
    });

});