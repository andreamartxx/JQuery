$(document).ready(()=>{

    $("#btn").click(()=>{

        $("h1").fadeTo(1500, 0.2);

    });

    $("#btn1").click(()=>{

        $("h1").fadeTo(3000, 1, ()=>{
            alert("Hola :)");
        });

    });

});