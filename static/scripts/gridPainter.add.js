gridPainter.add = ( function () {

    var settings = gridPainter.settings;

    var _addGrid = function () {

        // Update settings
        settings.thisGrid.columns  = settings.input.columns.value;
        settings.thisGrid.rows = settings.input.rows.value;
        settings.thisGrid.cells = settings.thisGrid.columns * settings.thisGrid.rows;
        settings.thisGrid.enabled = true;


        gridPainter.processCss.addGridCss(settings.value.gridCssSelector);
        _addGridItems();

    };

    var _addGridItems = function () {

        settings.element.grid.innerHTML = "";

        for (var i = 1; i <= settings.thisGrid.cells; i++) {

            var elementCell = document.createElement("div");

            elementCell.className = settings.value.gridItemCssSelector + " " + settings.value.gridItemCssSelector + "-" + i;

            (function(item) {
                elementCell.addEventListener("click", gridPainter.paint.paintGridItem );
            })(elementCell);

            settings.element.grid.append(elementCell);

        }

    };

    return {
        addGrid: _addGrid,
        addGridItems: _addGridItems
    };

} ) ();
