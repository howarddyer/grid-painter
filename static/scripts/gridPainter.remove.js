gridPainter.remove = ( function () {

    var settings = gridPainter.settings;

    var _removeGrid = function () {

        settings.thisGrid.columns = 0;
        settings.thisGrid.rows = 0;
        settings.thisGrid.cells = 0;
        settings.thisGrid.enabled = false;
        settings.thisGrid.css = {};

        settings.element.style.innerHTML = "";
        settings.element.grid.innerHTML = "";

        var inputs = [
            settings.input.columns,
            settings.input.rows
        ]

        for (var c = 0; c < inputs.length; c++) {
            if (!inputs[c].value) {
                inputs[c].value = "0";
            }
        }

    }

    return {
        removeGrid: _removeGrid
    };

} ) ();
