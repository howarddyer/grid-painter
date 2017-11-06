gridPainter.UI = ( function () {

    var settings = gridPainter.settings;

    var _toggleMenu = function () {

        settings.element.menu.classList.toggle("is-closed");

        if (settings.element.menu.classList.contains("is-closed")) {
            settings.input.menuButton.innerHTML = settings.value.iconMenuClosed;
        } else {
            settings.input.menuButton.innerHTML = settings.value.iconMenuOpen;
        }

    };

    return {
        toggleMenu: _toggleMenu
    };

} ) ();
