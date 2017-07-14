import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// RELATED
import { NotFoundComponent } from './404.component';
import { NotFoundRoutingModule } from './notfound-routing.module';

// TRANSLATE
import { TranslateModule } from '@ngx-translate/core';

// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
  imports: [
    CommonModule,
    NotFoundRoutingModule,

    // TRANSLATE
    TranslateModule
  ],
  declarations: [
    NotFoundComponent
  ],
  exports: [
    NotFoundComponent
  ]
})
export class NotFoundModule { }
