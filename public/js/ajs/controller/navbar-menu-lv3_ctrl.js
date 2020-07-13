(function () {
	"use strict";
	devManagerApp.controller('navbarMenuLv3Ctrl', navbarMenuLv3Ctrl);

	navbarMenuLv3Ctrl.$inject = ['$scope'];

	function navbarMenuLv3Ctrl($scope) {
		var vm = this;
		vm.menuLv3Dt = [];
		$scope.$on('menuLv3dt', (err, vl) => {
			if(!vl) {
				return vm.menuLv3Dt = [];
			}
			vm.mnLv2Tt = vl.title;
			vm.menuLv3Dt = vl.menulv3;
		})
	}
})();
