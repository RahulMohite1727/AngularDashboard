import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CoronaApiService } from './corona-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-corona-api',
  templateUrl: './corona-api.component.html',
  styleUrls: ['./corona-api.component.scss'],
  providers: [CoronaApiService]
})
export class CoronaApiComponent implements OnInit {
  coronaFormTable: FormGroup;


  constructor(private formBuilder: FormBuilder,
    private coronaApiService: CoronaApiService) {

  }
  ngOnInit() {
    this.coronaFormTable = this.formBuilder.group({
      coronaData: this.formBuilder.array([]),
    })
    this.getTableData();
  }

  get tableRow() {
    return this.coronaFormTable as FormGroup
  }
  createIemDetailsTableRow(data?: any) {
    return this.coronaApiService.tableRow(data)
  }
  addRow(data?: object) {
    let dataTable = this.tableRow.get('coronaData') as FormArray;
    dataTable.push(this.createIemDetailsTableRow(data));
  }
  getTableData() {
    this.coronaApiService.getResult().subscribe(data => {
      console.log("data ", data['India']);
      data['India'].forEach(element => {
        this.addRow(element)
      });
    })
  }
}


