// JavaScript Document
$(function () {
	
	$npt01 = Math.floor(Math.random() * 10) + 20;
	$npt02 = Math.floor(Math.random() * 10) + 20;
	$npt03 = Math.floor(Math.random() * 10) + 20;
	$npt04 = Math.floor(Math.random() * 10) + 20;
	$npt05 = Math.floor(Math.random() * 10) + 20;
	
	$pt01 = Math.floor(Math.random() * 10) + 60;
	$pt02 = Math.floor(Math.random() * 10) + 60;
	$pt03 = Math.floor(Math.random() * 10) + 60;
	$pt04 = Math.floor(Math.random() * 10) + 60;
	$pt05 = Math.floor(Math.random() * 10) + 60;
	
	$nw01 = 100 - ($npt01 + $pt01);
	$nw02 = 100 - ($npt02 + $pt02);
	$nw03 = 100 - ($npt03 + $pt03);
	$nw04 = 100 - ($npt04 + $pt04);
	$nw05 = 100 - ($npt05 + $pt05);
	
	$nptw01 = ($npt01/$pt01) * 100;
	$nptw02 = ($npt02/$pt02) * 100;
	$nptw03 = ($npt03/$pt03) * 100;
	$nptw04 = ($npt04/$pt04) * 100;
	$nptw05 = ($npt05/$pt05) * 100; 
	
    $('#container').highcharts({
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Qx-201x', 'Qx-201x', 'Qx-201x', 'Qx-201x', 'Qx-201x']
        },
        labels: {
            items: [{
                html: '',
                style: {
                    left: '50px',
                    top: '18px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'R&D Global Time Card'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        plotOptions: {
            column: {
                stacking: 'percent',
                dataLabels: {
                    enabled: true,
					format: '{point.percentage:.0f}%',
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black'
                    }
                }
            }
        },
        series: [{
            type: 'column',
            name: 'Non-Working Time',
            data: [$nw01, $nw02, $nw03, $nw04, $nw05]
        }, {
            type: 'column',
            name: 'NPT Time',
            data: [$npt01, $npt02, $npt03, $npt04, $npt05]
        }, {
            type: 'column',
            name: 'Project Time',
            data: [$pt01, $pt02, $pt03, $pt04, $pt05]
        }, {
            type: 'spline',
            name: 'NPT/Working Time',
            data: [$nptw01, $nptw02, $nptw03, $nptw04, $nptw05],
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[3],
                fillColor: 'white'
            }
        }, {
            type: 'pie',
            name: 'Total consumption',
            data: [{
                name: 'Jane',
                y: 13,
                color: Highcharts.getOptions().colors[0] // Jane's color
            }, {
                name: 'John',
                y: 23,
                color: Highcharts.getOptions().colors[1] // John's color
            }, {
                name: 'Joe',
                y: 19,
                color: Highcharts.getOptions().colors[2] // Joe's color
            }],
            center: [100, 80],
            size: -1,
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
        }]
    });
});
