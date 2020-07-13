(function () {
	"use strict";
	devManagerApp.controller('chartsDoanhThuTheoKenhBanCtrl', chartsDoanhThuTheoKenhBanCtrl);

	chartsDoanhThuTheoKenhBanCtrl.$inject = [];

	function chartsDoanhThuTheoKenhBanCtrl() {
		var vm = this;
		vm.chartsOp = {
			chartArea:{width:'85%',height:'85%' }
		};
		vm.demoKenhDoanhThu = [];
		for(var i=0; i < 7; i++) {
			var di = i+1;
			vm.demoKenhDoanhThu.push(
				{
					chanel: 'Kênh ' + di,
					order: 15*di,
					sales: 1200000*di
				}
			)
		}

		// Demo biểu đồ tỉ lệ %
		var bdkenhban = [];
		var sumtt = vm.demoKenhDoanhThu.reduce((a,b) => {
			return {sales: a.sales + b.sales}
		});
		bdkenhban.push(['kenh', '']);
		for(var y=0; y < vm.demoKenhDoanhThu.length; y++) {
			bdkenhban.push([vm.demoKenhDoanhThu[y].chanel, (vm.demoKenhDoanhThu[y].sales*100)/sumtt.sales]);
		}
		vm.demoKenhBan = bdkenhban;
		// End Demo
	}
})();
