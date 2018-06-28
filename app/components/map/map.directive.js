angular.module("myApp.map", [])
    .component("map", {
            controller: "ctrlMap",
            controllerAs: "ctrl",
            templateUrl: "components/map/map.template.html"
    })
    .controller("ctrlMap", function (tiles) {
        var self = this;
        self.$onInit = function () {
            self.mapSize = {
                "x": 10,
                "y": 10
            };

            this.test = tiles.loadTile();
            console.log(this.test);

        }
    })