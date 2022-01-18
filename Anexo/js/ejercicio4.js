/* $(document).ready(()=>{
   
    var form = $("#boton");

    form.submit((e)=>{
        e.preventDefault();

        $.get({
            type: form.attr('GET'),
            url: form.attr('../Ej4/script.php'),
            data: form.serialize(),
            success: function (data) {
                alert('Submission was successful.');
            },
            error: function (data) {
                alert('An error occurred.');
            }
        });

    });
    
}); */

$(document).ready(function () {
    $("#boton").on("click", () => {
    $.get( "../Ej4/script.php", $("form").serialize(), (response) => $("#contenedor").html(response))
    .fail((request) => $("#contenedor").html(request.status));
    });
});