$(document).ready(()=>{
    $.fn.changeColor = function(options){
        
        var settings = $.extend({
            color: 'orange',
        }, options);
        

        this.css("color", settings.color);
    }

    $("button").on("click", ()=>{
        $("p").changeColor({
            color: 'green',
        })
    })
})