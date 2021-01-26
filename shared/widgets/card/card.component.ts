import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widgets-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {};

  constructor() { }

  ngOnInit(): void {

    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
          text: 'NEW STUDENT'
      },
      subtitle: {
          text: 'Demo'
      },
      tooltip: {
          split: true,
          valueSuffix: '%'
      },
      credits:{
        enabled:false,
      },
      exporting:{
        enabled:true,
      },
      series: [{
          name: 'Students',
          data: [502, 635, 809, 947, 1402, 3634, 5268]
      }]      };

    HC_exporting(this.Highcharts);
    setTimeout(( ) => {
      window.dispatchEvent(
          new Event('resize')
      );
  }, 300);
  }
}