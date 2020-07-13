(function () {
	"use strict";
	devManagerApp.controller('quanLySauBanCtrl', quanLySauBanCtrl);

	quanLySauBanCtrl.$inject = ['quanlykhohangService'];

	function quanLySauBanCtrl(quanlykhohangService) {
		var vm = this;
		vm.loading = false;
		var d = new Date();
		vm.dateFormat = "d/M";

		vm.orderData = quanlykhohangService.getData('order');
		
		if(vm.orderData.length > 0) {
			vm.loading = true;
		}

		vm.setstatus = 'Chọn trạng thái';

		vm.statusList = [
			{
				title: 'Đơn cần xử lý gấp',
				clsname: 'btn-danger'
			},
			{
				title: 'Đơn bảo hành',
				clsname: 'btn-primary'
			},
			{
				title: 'Đang giao hàng',
				clsname: 'btn-info'
			},
			{
				title: 'Giao không thành công',
				clsname: 'btn-warning'
			},
			{
				title: 'Giao thành công',
				clsname: 'btn-success'
			},
			{
				title: 'Chuyển hoàn',
				clsname: 'btn-black'
			},
			{
				title: 'Đơn hủy',
				clsname: 'btn-danger'
			},
			{
				title: 'Đơn thất lạc - Hư hỏng',
				clsname: 'btn-danger'
			}
		];

		vm.setStatus = function (dtitem, st) {
			dtitem.status = st.title;
			dtitem.stclsname = st.clsname;
		}

		vm.getNote = function (dtitem) {
			if(!dtitem.note) {
				return;
			}
			dtitem.notest = true;
		}

		function formatPhoneNumber(phoneNumberString) {
			var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
			var match = cleaned.match(/^(1|)?(\d{4})(\d{3})(\d{3})$/)
			if (match) {
				var intlCode = (match[1] ? '+1 ' : '')
				return [intlCode, match[2], ' ', match[3], ' ', match[4]].join('')
			}
			return null
		}
		vm.formatPhone = formatPhoneNumber;
	}
})();
