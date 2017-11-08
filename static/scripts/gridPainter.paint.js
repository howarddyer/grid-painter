gridPainter.paint = (function () {

    var settings = gridPainter.settings;

    var _paintGridItem = function (event) {

        var elementId = event.target.id,
            elementSelector = "#" + elementId,
            painted = elementSelector in settings.thisGrid.css ? true : false;

        if (painted) {
            delete settings.thisGrid.css[elementSelector];
            gridPainter.processCss.addCssToUI();
        } else {
            gridPainter.processCss.addGridItemCss(elementId);
        }

    };

    return {
        paintGridItem: _paintGridItem
    };

} ) ();
