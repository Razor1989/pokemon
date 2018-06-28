angular.module("myApp.map")
    .service("tiles", function () {
        var self = this;
        this.setName;
        function setTilesSet(setName) {
            console.log("Name: " + setName);
        }

        function loadTile() {
            var can = document.createElement("canvas");
            can.width = 200;
            can.height = 200;
            can.style.backgroundColor = "red";
            var ctx = can.getContext('2d');
            var image = new Image();
            ctx.fillRect(25, 25, 100, 100);
            return can;
        }
        self.setTilesSet = setTilesSet;
        self.loadTile = loadTile;
    })