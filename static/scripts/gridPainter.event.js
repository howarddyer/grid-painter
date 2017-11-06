( function () {

    var settings = gridPainter.settings;

    var _bindEvents = function () {
        settings.input.columns.onblur = _selectGridEvent;
        settings.input.rows.onblur = _selectGridEvent;
        settings.input.menuButton.onclick = gridPainter.UI.toggleMenu;
    };

    var _selectGridEvent = function () {

        var columns = settings.input.columns.value,
            rows = settings.input.rows.value;

        if (columns > 0 && rows > 0) {

            if (settings.thisGrid.enabled) {
                gridPainter.update.updateGrid(columns, rows);
            } else {
                gridPainter.add.addGrid()
            }

        } else {
            gridPainter.remove.removeGrid();
        }

    };

    return _bindEvents();

} ) ();
