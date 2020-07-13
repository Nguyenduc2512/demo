(function () {
	"use strict";
	devManagerApp.controller('chartsDoanhThuTheoSanPhamCtrl', chartsDoanhThuTheoSanPhamCtrl);

	chartsDoanhThuTheoSanPhamCtrl.$inject = [];

	function chartsDoanhThuTheoSanPhamCtrl() {
		var vm = this;

		vm.chartsOp = {
			chartArea:{width:'85%',height:'85%' },
			pieStartAngle: 100
		};
		vm.dataChartsDemo = [];
		for(var i=0; i < 6; i++) {
			var di = i+1;
			vm.dataChartsDemo.push(
				{
					codeprd: 'Mã sản phẩm ' + di,
					order: 13*di,
					sales: 1600000*di
				}
			)
		}

		var chartsDemo = [];
		var sumtt = vm.dataChartsDemo.reduce((a,b) => {
			return {sales: a.sales + b.sales}
		});
		chartsDemo.push(['Nhân Viên', '']);
		for(var y=0; y < vm.dataChartsDemo.length; y++) {
			chartsDemo.push([vm.dataChartsDemo[y].codeprd, (vm.dataChartsDemo[y].sales*100)/sumtt.sales]);
		}
		vm.demoCharts = chartsDemo;
	}
})();
