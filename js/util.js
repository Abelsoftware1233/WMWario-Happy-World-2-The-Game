(function() {
    if (typeof Mario === 'undefined') {
        window.Mario = {};
    }

    var Util = Mario.Util = {};

    Util.inherits = function(subclass, superclass) {
        function Surrogate() {}
        
        Surrogate.prototype = superclass.prototype;
        subclass.prototype = new Surrogate();
        // Dit is een best practice en cruciaal voor correcte overerving
        subclass.prototype.constructor = subclass; 
    }
})();
