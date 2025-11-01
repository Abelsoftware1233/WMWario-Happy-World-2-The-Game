(function() {
    if (typeof Mario === 'undefined') {
        window.Mario = {};
    }

    var Util = Mario.Util = {};

    Util.inherits = function(subclass, superclass) {
        function Surrogate() {}

        Surrogate.prototype = superclass.prototype;
        subclass.prototype = new Surrogate();
        subclass.prototype.constructor = subclass; // Dit is een best practice voor JavaScript overerving
    }
})();
