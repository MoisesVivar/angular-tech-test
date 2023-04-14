import { Component, Input } from '@angular/core';
import { ExecutionTypesService } from '../execution-types.service';

@Component({
  selector: 'app-label-select',
  templateUrl: './label-select.component.html',
  styleUrls: ['./label-select.component.css']
})
export class LabelSelectComponent {
    public Options;
    constructor(service: ExecutionTypesService){
      this.Options = service.getExecutionTypes();
    }
    @Input() LabelName: String = ''
}
