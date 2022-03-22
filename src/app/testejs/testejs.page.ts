import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

import { ChartDataModel } from '../model/chart.data.model';
import { PopulationData } from '../model/population.model';
import { TesteJsService } from '../services/testejs/testejs.service';

@Component({
  selector: 'app-testejs',
  templateUrl: './testejs.page.html',
  styleUrls: ['./testejs.page.scss'],
})
export class TestejsPage implements OnInit {

  @ViewChild('barChart', { static: true }) barChart: ElementRef;

  bars: Chart;
  colorArray: any;
  populationData: Array<PopulationData>;
  chartDataModel: ChartDataModel;

  constructor(private testejsService: TesteJsService) {
    this.populationData = new Array<PopulationData>();
   }

  ngOnInit() {    
    this.getData();
  }

  createBarChart() {
    // Ref.: https://www.chartjs.org/docs/latest/
    
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        // Years
        labels: this.chartDataModel.Years,
        datasets: [{
          label: 'Viewers in millions',
          data: this.chartDataModel.Population,
          backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  getData() {
    this.testejsService.getData().subscribe(response => {
      this.chartDataModel = new ChartDataModel(response);
      this.chartDataModel.buildData();
      this.createBarChart();
    });
  }

}
