(function() {
    "use strict";
    var screen_width = 1024;
    var screen_height = 700;

    var start_x = 500;
    var start_y = 500;

    var context;
    var mainPoint = {
        x: start_x,
        y: start_y,
    }
    var points = [{
        x: 0,
        y: 0
    }, {
        x: 1000,
        y: 700
    }, {
        x: 700,
        y: 100
    }];


    $(document).ready(function() {
        context = document.getElementById("myCanvas").getContext("2d");
        setTimeout(draw, 60 / 1000);
    });

    function drawBackbonePoints() {
        for (let point of points) {
            drawPixel(point.x, point.y)
        }
    }

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function drawMainPoint() {
        context.fillStyle = "#999";
        drawPixel(mainPoint.x, mainPoint.y);
    }

    function nextMoment() {
        let targetIndex = getRandomInt(0, 3);
        let targetPoint = points[targetIndex];
        let dx = (targetPoint.x - mainPoint.x) / 2;
        let dy = (targetPoint.y - mainPoint.y) / 2;
        mainPoint.x += dx;
        mainPoint.y += dy;
       /* if (targetPoint.x > screen_width || targetPoint.x < 0) {
             targetPoint.x = start_x;
        }
        if (targetPoint.y > screen_height || targetPoint.y < 0) {
            targetPoint.y = start_y;
        }   */
        /*console.log('target index:'+targetIndex);
        console.log('x:'+mainPoint.x);
        console.log('y:'+mainPoint.y);
        console.log('dx:' + dx);
        console.log('dy:' + dy);*/
    }

    function drawPixel(x, y, color) {

        if (color) {
            let previousColor = context.fillStyle;
            context.fillStyle = color;
            context.fillRect(x, y, 1, 1);
            ontext.fillStyle = previousColor;
        } else {
            context.fillRect(x, y, 1, 1);
        }
    }

    function draw() {
        drawBackbonePoints();
        drawMainPoint();
        nextMoment();

        setTimeout(draw, 1000 / 60);
    }

}());