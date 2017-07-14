import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// RELATED
import { HistoryComponent } from './history.component';

// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HistoryComponent
  ],
  exports: [
    HistoryComponent
  ]
})
export class HistoryModule { }
