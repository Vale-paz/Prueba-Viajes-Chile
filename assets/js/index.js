$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});
$(document).ready(function () {
    $("#contacto").submit(function (event) {
        event.preventDefault();
        var nombre = $("#nombre").val()
        var mensaje = $("#mensaje").val()
        var asunto = $("#asunto").val()

        if (nombre === "" || mensaje === "" || asunto === "") {
            alert("Complete todos los campos")
        } else {
            alert("Mensaje enviado con éxito")
        }

    })
})
