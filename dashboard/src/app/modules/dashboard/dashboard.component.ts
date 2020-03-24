import { DashboardService } from './dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bigChart = [];
  cards = [];
  pieCharts = [];
  coronaWorldWide
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    fetch("https://pomber.github.io/covid19/timeseries.json")
      .then(response => response.json())
      .then(data => {
        console.log("data ", data);
        this.coronaWorldWide = data.India
        console.log("this.coronaWorldWide ", this.coronaWorldWide);
        // data["Argentina"].forEach(({ date, confirmed, recovered, deaths }) =>
        //   console.log(`${date} active cases: ${confirmed - recovered - deaths}`)
        // )
      })
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieCharts = this.dashboardService.pieCharts()
  }

}
