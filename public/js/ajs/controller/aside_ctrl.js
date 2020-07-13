(function () {
	"use strict";
	devManagerApp.controller('asideBarCtrl', asideBarCtrl);

	asideBarCtrl.$inject = ['$scope', 'MenuDataService', '$rootScope', '$window'];

	function asideBarCtrl($scope, $MenuDataService, $rootScope, $window) {
		var vm = this;
		vm.asideBarNav = $MenuDataService.getAsideMenu();
		$scope.mnSbleft = false;
		vm.menuLv3Dt = [];
		vm.clickMenuLv2 = function (data, idx) {
			$scope.mnSbleft = true;
			$rootScope.$broadcast('menuLv3dt', data);
			data.active = true;
			vm.asideBarNav.quanlykhachhangcrm.submenu.forEach(function (item) {
				if(item.title !== data.title) {
					item.active = false;
				}
			})
		}

		vm.toggleMenuLv2 = function () {
			$scope.mnSbleft = false;
		}

		vm.closeMnLv3 = function () {
			$scope.mnSbleft = false;
		}
		var checkSubmenu = $window.location.pathname;
		vm.asideBarNav.quanlykhachhangcrm.submenu.forEach(function (item, idx, nArr) {
			if(item.url === checkSubmenu) {
				$scope.mnSbleft = true;
				$rootScope.$broadcast('menuLv3dt', item);
				item.active = true;
			}
		})
		vm.asideShowHide = false;
		vm.toggleAsidebar = function () {
			vm.asideShowHide = !vm.asideShowHide;
			if(vm.asideShowHide) {
				$scope.mnSbleft = false;
			} else {
				$scope.mnSbleft = true;
			}
		}
	}
})();
