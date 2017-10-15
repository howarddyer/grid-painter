var gridPainter = gridPainter || {};

gridPainter.UI = (function () {

    var elementMenu = document.querySelector(".js-menu"),
        inputColumns = document.querySelector(".js-columns-textbox"),
        inputRows = document.querySelector(".js-rows-textbox"),
        buttonMenu = document.querySelector(".js-menu-button"),
        valueMenuOpen = "&#10005;",
        valueMenuClosed = "&#9776;";

    var _initialise = function () {
        _bindEvents();
    };

    var _bindEvents = function () {
        buttonMenu.onclick = _toggleMenu;
    };

    var _toggleMenu = function () {
        var menu = elementMenu,
            button = buttonMenu;

        menu.classList.toggle("is-closed");

        if (menu.classList.contains("is-closed")) {
            button.innerHTML = valueMenuClosed;
        } else {
            button.innerHTML = valueMenuOpen;
        }
    };

    return {
        initialise: _initialise ()
    };

})();
