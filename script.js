let div = $("#container div div");
let square = $("#container .square");
let round = $("#container .round");
let diamond = $("#container .diamond");

round.click(function () {
    if($(this).hasClass('full')) {
        $(this).removeClass("full").addClass("empty");
    }

    else {
        $(this).addClass("full").removeClass("empty");
    }
})

$("#empty").click(function () {
    if(div.hasClass('full')) {
        div.removeClass("full").addClass("empty");
    }
});

$("#full").click(function () {
    if(div.hasClass('empty')) {
        div.removeClass("empty").addClass("full");
    }
});

div.click(function () {
    if($(this).hasClass('square')) {
        if($(this).hasClass("full")) {
            $(this).removeClass("full").addClass("empty");

            if($(this).parent().children(0).hasClass("full")) {
                $(this).parent().children(0).removeClass("full").addClass("empty");
            }


            if($(this).parent().children(2).hasClass("full")) {
                $$(this).parent().children(2).removeClass("full").addClass("empty");
            }
        }
        else {
            $(this).addClass("full").removeClass("empty");

            if($(this).parent().children(0).hasClass("empty")) {
                $(this).parent().children(0).removeClass("empty").addClass("full");
            }


            if($(this).parent().children(2).hasClass("empty")) {
                $$(this).parent().children(2).removeClass("empty").addClass("full");
            }
        }
    }

    if($(this).hasClass('diamond')) {
        if($(this).hasClass("full")) {
            $(this).removeClass("full").addClass("empty");

            if($(this).parent().children(0).hasClass("full")) {
                $(this).parent().children(0).removeClass("full").addClass("empty");
            }


            if($(this).parent().children(1).hasClass("full")) {
                $$(this).parent().children(1).removeClass("full").addClass("empty");
            }
        }
        else {
            $(this).addClass("full").removeClass("empty");

            if($(this).parent().children(0).hasClass("empty")) {
                $(this).parent().children(0).removeClass("empty").addClass("full");
            }


            if($(this).parent().children(1).hasClass("empty")) {
                $$(this).parent().children(1).removeClass("empty").addClass("full");
            }
        }
    }
})

