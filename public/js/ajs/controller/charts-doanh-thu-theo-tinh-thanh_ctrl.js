(function () {
	"use strict";
	devManagerApp.controller('chartsDoanhThuTheoTinhThanhCtrl', chartsDoanhThuTheoTinhThanhCtrl);

	chartsDoanhThuTheoTinhThanhCtrl.$inject = [];

	function chartsDoanhThuTheoTinhThanhCtrl() {
		var vm = this;
		var tinhThanh = ['Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng', 'Khánh Hòa', 'Hải Phòng', 'Cần Thơ'];
		vm.chartsOp = {
			chartArea:{width:'75%',height:'75%' },
			pieStartAngle: 100
		};
		vm.dataChartsDemo = [];
		for(var i=0; i < tinhThanh.length; i++) {
			var di = i+1;
			vm.dataChartsDemo.push(
				{
					province: tinhThanh[i],
					order: 13*di,
					sales: 1600000*di
				}
			)
		}

		var chartsDemo = [];
		var sumtt = vm.dataChartsDemo.reduce((a,b) => {
			return {sales: a.sales + b.sales}
		});
		chartsDemo.push(['Province', 'Order', 'Sale']);
		for(var y=0; y < vm.dataChartsDemo.length; y++) {
			chartsDemo.push([vm.dataChartsDemo[y].province, vm.dataChartsDemo[y].order, (vm.dataChartsDemo[y].sales*100)/sumtt.sales]);
		}
		vm.demoCharts = chartsDemo;
	}
})();
