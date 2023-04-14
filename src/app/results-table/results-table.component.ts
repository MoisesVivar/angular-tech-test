import { Component, Input } from '@angular/core';
import { ResultsService } from '../results.service';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent {
    @Input() public results = [{ 
      referenceDate: "N/A",  
      benchmark1: "N/A",
      benchmark2: "N/A"
    }]
}
