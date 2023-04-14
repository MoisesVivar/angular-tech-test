import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-label-input',
  templateUrl: './label-input.component.html',
  styleUrls: ['./label-input.component.css']
})
export class LabelInputComponent {
    @Input() LabelName: String = ''
    @Input() InputValue: FormControl = new FormControl('0', [
      Validators.min(1), Validators.required
    ])
}
