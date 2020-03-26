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

  tableRow(data?) {
    return this.formBuilder.group({
      id: [data ? data.id : null],
      date: [{ value: data ? data.date : null, disabled: true }],
      confirmed: [{ value: data ? data.confirmed : null, disabled: true }],
      deaths: [{ value: data ? data.deaths : null, disabled: true }],
      recovered: [{ value: data ? data.recovered : null, disabled: true }],
    })
  }
}
