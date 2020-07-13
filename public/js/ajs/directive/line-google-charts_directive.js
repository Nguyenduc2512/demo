(function () {
	"use strict";
	devManagerApp.directive('lineGoogleCharts', lineGoogleCharts);

	lineGoogleCharts.$inject = ['$timeout'];

	function lineGoogleCharts($timeout) {
		return {
			restrict: "AE",
			scope: {
				chartsData: '=',
				chartsOptions: '='
			},
			link: function (scope, gElm, gAttr) {
				$timeout(() => {
					var lineData = scope.chartsData || [];
					var drawchart = function(){
						var chart = new google.visualization.LineChart(gElm[0]);
						var options = scope.chartsOptions || {
							title: '',
							curveType: 'function',
							legend: { position: 'bottom' }
						};
						var data = new google.visualization.arrayToDataTable(lineData);
						chart.draw(data, options);
						scope.$apply();
					}

					google.charts.load('current', {
						packages: ['corechart', 'bar'],
						callback: drawchart
					});
				}, 1000)
			}
		}
	}
})();
