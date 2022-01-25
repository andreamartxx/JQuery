$(document).ready(()=>{

    $("#btn").click(()=>{

        $("h1").fadeTo(1500, 1);

    });

    $("#btn1").click(()=>{

        $("h1").fadeTo(2500, 0.1, ()=>{
            alert("Hola :)");
        });

    });

});