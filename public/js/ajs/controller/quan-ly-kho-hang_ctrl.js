(function () {
	"use strict";
	devManagerApp.controller('quanlykhohangCtrl', quanlykhohangCtrl);

	quanlykhohangCtrl.$inject = ['$scope', 'quanlykhohangService', '$timeout'];

	function quanlykhohangCtrl($scope, quanlykhohangService, $timeout) {
		var vm = this;
		vm.loading = false;
		vm.dateFormat = "d/M/yyyy h:mm a";
		quanlykhohangService.getData('order').then((reps) => {
			vm.loading = true;
			vm.baocaoxuat = reps.data[2];
		});

		quanlykhohangService.getData('product').then((resp) => {
			vm.loading = true;
			console.log(resp.data);
		});
		quanlykhohangService.getData('product_store').then((resp) => {
			vm.loading = true;
			console.log(resp.data);
		})
	}
})();
