(function () {
	"use strict";
	devManagerApp.controller('chartsThongKeCtrl', chartsThongKeCtrl);

	chartsThongKeCtrl.$inject = ['quanlykhohangService', '$timeout', '$http'];

	function chartsThongKeCtrl(quanlykhohangService, $timeout, $http) {
		var vm = this;
		var d = new Date();
		vm.demoBieuDoThongKe = [];
		var getChartsDemo = async () => {
			var getdt = [{"ngay":"27-06-2020","so_don":"16","doanh_so":"4144000","chi_phi_co_dinh":"2442500","loi_nhuan_tam_tinh":"1701500"},{"ngay":"27-06-2020","so_don":"11","doanh_so":"2946000","chi_phi_co_dinh":"1812300 ","loi_nhuan_tam_tinh":"1133700"},{"ngay":"26-06-2020","so_don":"15","doanh_so":"3824000","chi_phi_co_dinh":"2314200","loi_nhuan_tam_tinh":"1509800"},{"ngay":"25-06-2020","so_don":"15","doanh_so":"3824000","chi_phi_co_dinh":"2314200","loi_nhuan_tam_tinh":"1509800"},{"ngay":"24-06-2020","so_don":"10","doanh_so":"3328000","chi_phi_co_dinh":"2224100","loi_nhuan_tam_tinh":"1103900"},{"ngay":"23-06-2020","so_don":"9","doanh_so":"2585000","chi_phi_co_dinh":"1550700","loi_nhuan_tam_tinh":"1034300"},{"ngay":"22-06-2020","so_don":"9","doanh_so":"2478000","chi_phi_co_dinh":"1628100","loi_nhuan_tam_tinh":"849900"},{"ngay":"21-06-2020","so_don":"15","doanh_so":"4387000 ","chi_phi_co_dinh":"2764100","loi_nhuan_tam_tinh":"1622900"}];
			vm.demoBdChart = [];
			vm.demoBdChart.push(['Date', 'Đơn', 'Doanh số', 'Chi phí cố định', 'Lợi nhuận tạm tính']);
			for(var i=0; i < getdt.length; i++) {
				var di = i+1;
				vm.demoBieuDoThongKe.push(
					{
						date: getdt[i].ngay,
						order: parseInt(getdt[i].so_don, 10),
						sales: parseInt(getdt[i].doanh_so, 10),
						fixcost: parseInt(getdt[i].chi_phi_co_dinh, 10),
						profit: parseInt(getdt[i].loi_nhuan_tam_tinh, 10)
					}
				)
			}
			for(var y=0; y < vm.demoBieuDoThongKe.length; y++) {
				vm.demoBdChart.push([vm.demoBieuDoThongKe[y].date,vm.demoBieuDoThongKe[y].order, vm.demoBieuDoThongKe[y].sales, vm.demoBieuDoThongKe[y].fixcost, vm.demoBieuDoThongKe[y].profit]);
			}
		}
		getChartsDemo();
	}
})();
