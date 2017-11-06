gridPainter.processCss = ( function () {

    var settings = gridPainter.settings;

    var _addGridCss = function (cssSelector) {

        var valueMax = Math.max(settings.thisGrid.rows, settings.thisGrid.columns);

        settings.thisGrid.css[cssSelector] = [
            "border: solid 1px black; ",
            "grid-template-rows: repeat(" + settings.thisGrid.rows + ", " + settings.value.sizeCell + "); ",
            "grid-template-columns: repeat(" + settings.thisGrid.columns + ", " + settings.value.sizeCell + "); ",
            "height: calc(calc(calc(100vmin - " + settings.value.pagePadding + ")/" + valueMax + ")" + "*" + settings.thisGrid.rows + "); ",
            "width: calc(calc(calc(100vmin - " + settings.value.pagePadding + ")/" + valueMax + ")" + "*" + settings.thisGrid.columns + "); "
        ].join("");

        _addCssToUI();

    };

    var _addGridItemCss = function (cssSelector) {

        settings.thisGrid.css[cssSelector] = "background: " + settings.value.colour;

        _addCssToUI()

    };

    var _updateGridItemCss = function (change) {

        var itemClassPre = "." + settings.value.gridItemCssSelector + "." + settings.value.gridItemCssSelector + "-",
            itemClassPreTemp = "temp." + settings.value.gridItemCssSelector + "." + settings.value.gridItemCssSelector + "-",
            previousColumn = settings.thisGrid.columns - change;

        for (var key in settings.thisGrid.css) {
            if (key.indexOf(settings.value.gridItemCssSelector) != -1) {

                var itemGridIndex = parseInt(key.substring(itemClassPre.length,key.length)),
                    itemRowIndex = Math.ceil(itemGridIndex / previousColumn),
                    itemColumnIndex = itemGridIndex - (previousColumn * (itemRowIndex - 1));

                if (itemColumnIndex > settings.thisGrid.columns || itemRowIndex > settings.thisGrid.rows) {
                    delete settings.thisGrid.css[key];
                } else if (itemGridIndex > previousColumn) {
                    var newItemGridIndex = itemGridIndex + (change * (itemRowIndex - 1)),
                        newKey = itemClassPreTemp + newItemGridIndex,
                        content = settings.thisGrid.css[key]

                    delete settings.thisGrid.css[key];
                    settings.thisGrid.css[newKey] = content;
                }

            }
        }

        for (var key in settings.thisGrid.css) {
            if (key.indexOf(settings.value.gridItemCssSelector) != -1) {

                var newKey = key.replace("temp", ""),
                    content = settings.thisGrid.css[key]

                delete settings.thisGrid.css[key];
                settings.thisGrid.css[newKey] = content;
            }
        }

    };

    var _addCssToUI = function () {

        settings.element.style.innerHTML = "";

        for (var prop in settings.thisGrid.css) {
            settings.element.style.innerHTML +=
                prop + " {" +
                    settings.thisGrid.css[prop] +
                "}";
        }

    };

    return {
        addGridCss: _addGridCss,
        addGridItemCss: _addGridItemCss,
        updateGridItemCss: _updateGridItemCss,
        addCssToUI: _addCssToUI
    };

} ) ();
