$(document).ready(function() {

    $("div").click(function() {
        var content = $(this).html();
        $(".santa").text("You clicked on the Santa claus");
        
    })
});