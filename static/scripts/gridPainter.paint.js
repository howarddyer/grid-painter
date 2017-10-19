var gridPainter = gridPainter || {};

gridPainter.paint = (function () {

    var elementGrid = document.querySelector(".js-grid"),
        inputColour = document.querySelector(".js-colour-textbox"),
        inputBackground = document.querySelector(".js-background-textbox"),
        valueColour = inputColour.value;


    var _initialise = function () {
        _bindEvents();
    };

    var _bindEvents = function () {
    };

    var _paintGridItem = function (event) {

        var element = event.target;

        if (element.hasAttribute("data-painted")) {
            element.style.backgroundColor = "";
            element.removeAttribute("data-painted")
        } else {
            element.style.backgroundColor = valueColour;
            element.setAttribute("data-painted",true)
        }

    };

    return {
        initialise: _initialise (),
        paintGridItem: _paintGridItem
    };

})();
