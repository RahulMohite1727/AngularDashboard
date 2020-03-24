import { FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CoronaApiService {

  constructor(private httpClient: HttpClient,
    private formBuilder: FormBuilder) { }

  getResult() {
    // fetch("https://pomber.github.io/covid19/timeseries.json")
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log("data ", data);
    // data["Argentina"].forEach(({ date, confirmed, recovered, deaths }) =>
    //   console.log(`${date} active cases: ${confirmed - recovered - deaths}`)
    // )

    // })
    return this.httpClient.get("https://pomber.github.io/covid19/timeseries.json")

  }
  itemDetailsTableRow(data?) {
    return this.formBuilder.group({
      id: [data ? data.id : null],
      sparePartMasterId: [data ? data.sparePartMasterId : null],
      isSelected: [{ value: false, disabled: false }],
      itemNo: [{ value: data ? data.itemNo : null, disabled: false }],
      itemDescription: [{ value: data ? data.itemDescription : null, disabled: true }],
      quantity: [{ value: data ? data.quantity : null, disabled: false }],
      remarks: [{ value: data ? data.remarks : null, disabled: false }],
      type: [{ value: data ? data.type : null, disabled: false }],
      raiseComplaint: [{ value: data ? data.raiseComplaint : null, disabled: true }],
      deleteFlag: [false],
      rowId: [data ? data.rowId : null]
    })
  }
}
