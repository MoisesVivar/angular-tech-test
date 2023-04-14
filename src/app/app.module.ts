import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResultsTableComponent } from './results-table/results-table.component';
import { ResultsService } from './results.service';
import { LabelInputComponent } from './label-input/label-input.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { LabelSelectComponent } from './label-select/label-select.component'
import { ExecutionTypesService } from './execution-types.service';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ResultsTableComponent,
    LabelInputComponent,
    LabelSelectComponent
  ],
  imports: [
    BrowserModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ResultsService, ExecutionTypesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
