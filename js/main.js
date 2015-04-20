$(function () {

    var clickedTime;
    var createdTime;
    var reactionTime;
    var bestTime = 10000;

    var boxOffset = $("#box-container").offset();
    var topOffset = boxOffset.top;
    var leftOffset = boxOffset.left;
    console.log(topOffset, leftOffset);

    function getRandomColor() {
        // Gets a random hex colour
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
    }

    function getRandomShape() {
        // Creates a circle or a square
        var border;
        if (Math.random() > 0.5) {
            border = '100%';
        } else {
            border = '0';
        }
        return border;
    }

    function getRandomX() {
        // Chooses random x position of shapes
        var left = Math.random();
        var boxWidth = $(window).width();
        left *= (boxWidth - 250);
        return left;
    }

    function getRandomY() {
        // Chooses random y position of shapes
        var top = Math.random();
        var boxHeight = parseInt($("#box-container").css("height"), 10);
        top *= (boxHeight - 250);
        return top;
    }

    function getRandomSize() {
        // Changes size of shape
        var size = Math.random();
        size *= 200;
        return size + 50; // to restrict the range of sizes
    }

    function makeShape() {

        var time = Math.random();
        time *= 800;

        setTimeout(function () {

            $("#box").css("display", "block");
            $("#box").css("backgroundColor", getRandomColor());
            $("#box").css("borderRadius", getRandomShape());
            $("#box").css("marginLeft", getRandomX() + 'px');
            $("#box").css("marginTop", getRandomY() + 'px');
            $("#box").css("width", getRandomSize() + 'px');
            var scale = $('#box').css("width");
            $("#box").css("height", scale);
            createdTime = Date.now();

        }, time); // end setTimeout
    }

    // get reaction time when shape is clicked
    $("#box").on("click", function () {

        clickedTime = Date.now();
        reactionTime = (clickedTime - createdTime) / 1000;

        if (reactionTime < bestTime) {
            bestTime = reactionTime
            $('#bestTime').html(bestTime);
        }

        $("#time").html(reactionTime);
        $(this).css("display", "none");

        makeShape();
    });


    // start the game
    $("#start").on("click", function () {
        $(this).addClass("active");
        $("#stop").removeClass("active");
        makeShape();
    });

    //stop the game
    $("#stop").on("click", function () {
        $("#box").css("display", "none");
        $(this).addClass("active");
        $("#start").removeClass("active");
    });

});