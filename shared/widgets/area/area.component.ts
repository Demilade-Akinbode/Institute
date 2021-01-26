import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions!: {};

  Highcharts = Highcharts;

  constructor() { }

   

  ngOnInit(): void {
    this.chartOptions = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Monthly Student Success Rate'
        },
        subtitle: {
            text: 'Demo'
        },
        credits:{
            enabled:false,
        },
        exporting:{
            enabled:true,
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Exam Scores'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'WAEC',
            data: [49.9, 71.5, 16.4, 98.2, 44.0, 76.0, 35.6, 48.5, 21.4, 94.1, 95.6, 54.4]
    
        }, {
            name: 'JAMB',
            data: [83.6, 78.8, 98.5, 93.4, 16.0, 84.5, 50.0, 40.3, 91.2, 83.5, 16.6, 92.3]
    
        }, {
            name: 'IELTS',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
    
        }, {
            name: 'SAT',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
    
        }]
    };

    HC_exporting(Highcharts);
    
    setTimeout(( ) => {
        window.dispatchEvent(
            new Event('resize')
        );
    }, 300);
    }
  }
