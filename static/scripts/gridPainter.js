var gridPainter = ( function () {

    var _element  = {
        style: document.querySelector("head style"),
        menu: document.querySelector(".js-menu"),
        grid: document.querySelector(".js-grid")
    };

    var _input = {
        menuButton: document.querySelector(".js-menu-button"),
        columns: document.querySelector(".js-columns-textbox"),
        rows: document.querySelector(".js-rows-textbox"),
        background: document.querySelector(".js-background-textbox"),
        colour: document.querySelector(".js-colour-textbox")
    };

    var _value = {
        cssSelectorBaseGrid: "o-grid",
        cssSelectorBaseGridItem: "grid-item",
        sizeCell: "1fr",
        pagePadding: "124px",
        iconMenuOpen: "&#10005;",
        iconMenuClosed: "&#9776;",
        colour: _input.colour.value || "red"
    };

    var _thisGrid = {
        columns: 0,
        rows: 0,
        cells: 0,
        enabled: false,
        css: {}
    };

    return {
        settings: {
            element: _element,
            input: _input,
            value: _value,
            thisGrid: _thisGrid
        }
    };

} ) ();
