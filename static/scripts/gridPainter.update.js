gridPainter.update = ( function () {

    var settings = gridPainter.settings;

    var _updateGrid = function (columns, rows) {

        var columnChange = columns - settings.thisGrid.columns,
            rowChange = rows - settings.thisGrid.rows;

        settings.thisGrid.columns = columns;
        settings.thisGrid.rows = rows;
        settings.thisGrid.cells = columns * rows;

        if (columnChange || rowChange) {
            gridPainter.processCss.updateGridItemCss(columnChange);
        }

        gridPainter.processCss.addGridCss(settings.value.gridCssSelector);
        gridPainter.add.addGridItems();

    };

    return {
        updateGrid: _updateGrid
    };

} ) ();
