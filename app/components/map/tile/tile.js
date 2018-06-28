angular.module("myApp.map")
    .component('tile', {
        template: "<canvas id='canvas'></canvas>",
        controller: "ctrlTile",
        controllerAs: "ctrl",
        bindings:  {
            set: '='
        }
    })
    .controller("ctrlTile", function () {
        var self = this;
        var can = document.getElementById("canvas");
        var ctx = can.getContext("2d");
        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);
        console.log('SET: ' + self.set);
    })