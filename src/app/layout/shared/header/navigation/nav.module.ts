import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Translate
import { TranslateModule } from '@ngx-translate/core';

// ROUTES
import { RouterModule } from '@angular/router';

// RELATED
import { NavComponent } from './nav.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    TranslateModule
  ],
  declarations: [
    NavComponent
  ],
  exports: [
    NavComponent,
    TranslateModule
  ]
})
export class NavModule { }
