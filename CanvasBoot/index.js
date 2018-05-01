(function() {
    "use strict";

    var context;
    var mainPoint = {
        x: 5,
        y: 5,
    }
    var points = [{
        x: 0,
        y: 0
    }, {
        x: 20,
        y: 20
    }, {
        x: 100,
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
        let targetPoint = points[getRandomInt(0, 3)];
        let dx = (mainPoint.x - targetPoint.x) / 2;
        let dy = (mainPoint.y - targetPoint.y) / 2;
        targetPoint.x += dx;
        targetPoint.y += dy;

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

        setTimeout(draw, 1000 / 30);
    }

}());