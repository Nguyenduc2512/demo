(function () {
	"use strict";
	devManagerApp.service('MenuDataService', MenuDataService);

	MenuDataService.$inject = [];

	function MenuDataService() {
		return {
			getAsideMenu: () => {
				var data = {};
				var subicon = 'fas fa-chevron-right';
				data.quanlykhachhangcrm = {
					title: 'Quản lý khách hàng CRM',
					icon: 'fas fa-users',
					url: '/quan-ly-khach-hang-crm',
					submenu: [
						{
							title: 'Khách hỏi thăm',
							icon: subicon,
							url: '/khack-hoi-tham'
						},
						{
							title: 'Khách chưa mua',
							icon: subicon,
							url: '',
							menulv3: [
								{
									title: 'Khách Hủy',
									url: ''
								},
								{
									title: 'Khách không nghe máy',
									url: ''
								},
								{
									title: 'Chờ đặt cọc',
									url: ''
								},
								{
									title: 'Khách hẹn mua sau',
									url: ''
								},
								{
									title: 'Khách không nghe điện thoai',
									url: ''
								}
							]
						},
						{
							title: 'Quản lý đơn hàng',
							icon: subicon,
							url: '/admin/order',
							menulv3: [
								{
									title: 'Chờ gọi xác nhận',
									url: ''
								},
								{
									title: 'Đã gọi xác nhận',
									url: ''
								},
								{
									title: 'Chờ đóng gói',
									url: ''
								},
								{
									title: 'Chờ duyệt gửi',
									url: ''
								},
								{
									title: 'Đã gửi',
									url: ''
								}
							]
						},
						{
							title: 'Quản lý sau bán',
							icon: subicon,
							// url: '/quan-ly-khach-hang/quan-ly-sau-ban',
							menulv3: [
								{
									title: 'Đơn cần xử lý gấp',
									url: ''
								},
								{
									title: 'Đơn bảo hành',
									url: ''
								},
								{
									title: 'Đang giao hàng',
									url: ''
								},
								{
									title: 'Giao không thành công',
									url: ''
								},
								{
									title: 'Giao thành công',
									url: ''
								},
								{
									title: 'Chuyển hoàn',
									url: ''
								},
								{
									title: 'Đã nhận hàng hoàn',
									url: ''
								},
								{
									title: 'Khách báo hủy',
									url: ''
								}
							]
						},
						{
							title: 'Quản lý khách Đại lý',
							icon: subicon,
							url: ''
						},
						{
							title: 'Khách Sỉ - Mua nhiều',
							icon: subicon,
							url: ''
						}
					]
				}
				return data;
			}
		}
	}
})();
