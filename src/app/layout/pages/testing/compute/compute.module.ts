import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// RELATED
import { ComputeComponent } from './compute.component';

// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ComputeComponent
  ],
  exports: [
    ComputeComponent
  ]
})
export class ComputeModule { }
