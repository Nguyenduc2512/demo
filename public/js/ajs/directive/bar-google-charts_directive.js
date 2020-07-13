(function () {
	"use strict";
	devManagerApp.directive('barGoogleCharts', barGoogleCharts);

	barGoogleCharts.$inject = [];

	function barGoogleCharts() {
		return {
			restrict: "AE",
			scope: {
				chartsData: '=',
				chartsOptions: '='
			},
			link: function (scope, gElm, gAttr) {
				var pieData = scope.chartsData || [];
				var drawchart = function(){
					var chart = new google.visualization.BarChart(gElm[0]);
					var options = scope.chartsOptions || { bars: 'vertical'};
					var data = new google.visualization.arrayToDataTable(pieData);
					chart.draw(data, options);
				}

				google.charts.load('current', {
					packages: ['corechart', 'bar'],
					callback: drawchart
				});
			}
		}
	}
})();
