import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// RELATED
import { TestComponent } from './testing.component';
import { TestRoutingModule } from './testing-routing.module';

// TRANSLATE
import { TranslateModule } from '@ngx-translate/core';

// CHILDREN
import { HistoryModule } from './history/history.module';
import { ComputeModule } from './compute/compute.module';

// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
  imports: [
    CommonModule,
    TestRoutingModule,
    HistoryModule,
    ComputeModule,

    // TRANSLATE
    TranslateModule

  ],
  declarations: [
    TestComponent
  ],
  exports: [
    TestComponent,
    HistoryModule,
    ComputeModule
  ]
})
export class TestModule { }
