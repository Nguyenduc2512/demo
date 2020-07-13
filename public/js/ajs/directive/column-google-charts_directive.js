(function () {
	"use strict";
	devManagerApp.directive('columnGoogleCharts', columnGoogleCharts);

	columnGoogleCharts.$inject = [];

	function columnGoogleCharts() {
		return {
			restrict: "AE",
			scope: {
				chartsData: '=',
				chartsOptions: '='
			},
			link: function (scope, gElm, gAttr) {
				var chartsData = scope.chartsData || [];
				var drawchart = function(){
					var chart = new google.visualization.ColumnChart(gElm[0]);
					var options = scope.chartsOptions || { bars: 'vertical'};
					var data = new google.visualization.arrayToDataTable(chartsData);
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
