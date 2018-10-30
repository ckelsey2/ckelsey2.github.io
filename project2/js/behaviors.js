
$(document).ready(function (){
    $('#rotate-one').click(function() {
        $("#one-cup").toggleClass("rotated");
        $("#one-cup").toggleClass("invisible");
        $("#two-cup").toggleClass("rotated");
        $("#two-cup").toggleClass("visible");
        $('#green-tea-information').toggleClass("visible");
        });
});

$(document).ready(function (){
    $('#green-tea-close').click(function() {
        $("#one-cup").toggleClass("rotated");
        $("#one-cup").toggleClass("invisible");
        $("#two-cup").toggleClass("rotated");
        $("#two-cup").toggleClass("visible");
        $('#green-tea-information').toggleClass("visible");
        $("#rotate-one").toggleClass("visible");
        });
});


$(document).ready(function (){
    $('#rotate-two').click(function() {
        $("#three-cup").toggleClass("rotated");
        $("#three-cup").toggleClass("invisible");
        $("#four-cup").toggleClass("rotated");
        $("#four-cup").toggleClass("visible");
        $('#white-tea-information').toggleClass("visible");
        });
});

$(document).ready(function (){
    $('#white-tea-close').click(function() {
        $("#three-cup").toggleClass("rotated");
        $("#three-cup").toggleClass("invisible");
        $("#four-cup").toggleClass("rotated");
        $("#four-cup").toggleClass("visible");
        $('#white-tea-information').toggleClass("visible");
        });
});




$(document).ready(function (){
    $('#rotate-three').click(function() {
        $("#five-cup").toggleClass("rotated");
        $("#five-cup").toggleClass("invisible");
        $("#six-cup").toggleClass("rotated");
        $("#six-cup").toggleClass("visible");
        $('#black-tea-information').toggleClass("visible");
        });
});

$(document).ready(function (){
    $('#black-tea-close').click(function() {
        $("#five-cup").toggleClass("rotated");
        $("#five-cup").toggleClass("invisible");
        $("#six-cup").toggleClass("rotated");
        $("#six-cup").toggleClass("visible");
        $('#black-tea-information').toggleClass("visible");
        });
});



$(document).ready(function (){
    $('#rotate-four').click(function() {
        $("#seven-cup").toggleClass("rotated");
        $("#seven-cup").toggleClass("invisible");
        $("#eight-cup").toggleClass("rotated");
        $("#eight-cup").toggleClass("visible");
        $('#oolong-tea-information').toggleClass("visible");
        });
});

$(document).ready(function (){
    $('#oolong-tea-close').click(function() {
        $("#seven-cup").toggleClass("rotated");
        $("#seven-cup").toggleClass("invisible");
        $("#eight-cup").toggleClass("rotated");
        $("#eight-cup").toggleClass("visible");
        $('#oolong-tea-information').toggleClass("visible");
        });
});
