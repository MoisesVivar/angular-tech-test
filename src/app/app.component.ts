import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ResultsService } from './results.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public results = [{ 
    referenceDate: "N/A",  
    benchmark1: "N/A",
    benchmark2: "N/A"
  }];
  private _service;

  constructor(service: ResultsService){
    this._service = service
  }

  title = 'angular-tech-test';
  private validators = [Validators.min(1), Validators.required]
  main_limit_value: FormControl = new FormControl('0', this.validators)
  main_retention_value: FormControl = new FormControl('0', this.validators)
  triggerCalculation(){
      this.main_limit_value = new FormControl('0', this.validators)
      this.main_retention_value = new FormControl('0', this.validators)
      this.resultsVisible = true
      this.results = this._service.getResults()
  }
  resultsVisible: boolean = false
}
