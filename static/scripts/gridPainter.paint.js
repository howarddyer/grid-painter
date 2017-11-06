gridPainter.paint = (function () {

    var settings = gridPainter.settings;

    var _paintGridItem = function (event) {

        var elementClasses = event.target.className.split(" "),
            elementCssSelector = "." + elementClasses[0] + "." + elementClasses[1],
            painted = elementCssSelector in settings.thisGrid.css ? true : false;

        if (painted) {
            delete settings.thisGrid.css[elementCssSelector];
            gridPainter.processCss.addCssToUI();
        } else {
            gridPainter.processCss.addGridItemCss(elementCssSelector);
        }

    };

    return {
        paintGridItem: _paintGridItem
    };

} ) ();
