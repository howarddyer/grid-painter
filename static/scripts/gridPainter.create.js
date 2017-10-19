var gridPainter = gridPainter || {};

gridPainter.create = (function () {

    var elementStyle = document.querySelector("head style"),
        elementGrid = document.querySelector(".js-grid"),
        inputColumns = document.querySelector(".js-columns-textbox"),
        inputRows = document.querySelector(".js-rows-textbox"),
        valueCellSize = "1fr",
        valuePagePadding = "124px",
        valueColumns = 0,
        valueRows = 0,
        valueGrid = false,
        objectCSS = {};

    var _initialise = function () {
        _bindEvents();
    };

    var _bindEvents = function () {
        inputColumns.onblur = _assignUpdate;
        inputRows.onblur = _assignUpdate;
    };

    var _assignUpdate = function () {

        var columns = inputColumns.value,
            rows = inputRows.value;

        if (columns > 0 && rows > 0) {

            if (valueGrid) {
                // Further code required
            } else {
                _createGrid(columns, rows)
            }

        } else {
            _removeGrid();
        }

    };

    var _createGrid = function (columns, rows) {

        var cells = columns * rows;

        valueColumns = columns;
        valueRows = rows;
        //valueGrid = true;

        _processCSS(".o-grid", columns, rows);
        _updateGridItems(cells);

    };

    var _updateGridItems = function (cells) {

        elementGrid.innerHTML = "";

        for (var i = 1; i <= cells; i++) {

            var elementCell = document.createElement("div");

            elementCell.className = "o-grid-item js-grid-item-" + i;

            (function(item) {
                elementCell.addEventListener("click", gridPainter.paint.paintGridItem );
            })(elementCell);

            elementGrid.append(elementCell);

        }

    };

    var _processCSS = function (cssSelector, columns, rows) {

        var valueMax = Math.max(rows, columns),
            css = [
                "border: solid 1px black; ",
                "grid-template-rows: repeat(" + rows + ", " + valueCellSize + "); ",
                "grid-template-columns: repeat(" + columns + ", " + valueCellSize + "); ",
                "height: calc(calc(calc(100vmin - " + valuePagePadding + ")/" + valueMax + ")" + "*" + rows + "); ",
                "width: calc(calc(calc(100vmin - " + valuePagePadding + ")/" + valueMax + ")" + "*" + columns + "); "
            ];

        elementStyle.innerHTML = "";
        objectCSS[cssSelector] = css.join("");

        for (var prop in objectCSS) {
            elementStyle.innerHTML +=
                prop + " {" +
                    objectCSS[prop] +
                "}";
        }

    };

    var _removeGrid = function () {
        valueColumns = 0;
        valueRows = 0;
        //valueGrid = false;
        objectCSS = {};

        elementStyle.innerHTML = "";
        elementGrid.innerHTML = "";

        [inputColumns, inputColumns].forEach( function (input) {
            if (!input.value) {
                input.value = "0";
            }
        })

    }

    return {
        initialise: _initialise ()
    };

})();
