(function () {
	"use strict";
	devManagerApp.controller('chartsDoanhThuNhanVienCtrl', chartsDoanhThuNhanVienCtrl);

	chartsDoanhThuNhanVienCtrl.$inject = [];

	function chartsDoanhThuNhanVienCtrl() {
		var vm = this;
		vm.chartsOp = {
			chartArea:{width:'85%',height:'85%' },
			pieHole: 0.6,
		};
		vm.dataChartsDemo = [];
		for(var i=0; i < 6; i++) {
			var di = i+1;
			vm.dataChartsDemo.push(
				{
					name: 'NV ' + di,
					order: 15*di,
					sales: 1300000*di
				}
			)
		}

		var chartsDemo = [];
		var sumtt = vm.dataChartsDemo.reduce((a,b) => {
			return {sales: a.sales + b.sales}
		});
		chartsDemo.push(['Nhân Viên', '']);
		for(var y=0; y < vm.dataChartsDemo.length; y++) {
			chartsDemo.push([vm.dataChartsDemo[y].name, (vm.dataChartsDemo[y].sales*100)/sumtt.sales]);
		}
		vm.demoCharts = chartsDemo;
		// End Demo
	}
})();
