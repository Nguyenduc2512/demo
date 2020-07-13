(function () {
	"use strict";
	devManagerApp.controller('adminOrderCtrl', adminOrderCtrl);

	adminOrderCtrl.$inject = ['quanlykhohangService'];

	function adminOrderCtrl(quanlykhohangService) {
		var vm = this;
		var d = new Date();
		vm.timeNow = d.toISOString();
		vm.loading = false;
		quanlykhohangService.getData('order').then((res) => {
			vm.loading = true;
			vm.orderData = res.data[2].data;
		})
	}
})();
