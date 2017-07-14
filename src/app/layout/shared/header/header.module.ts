import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// ROUTES
import { RouterModule } from '@angular/router';

// RELATED
import { HeaderComponent } from './header.component';
import { NavModule } from './navigation/nav.module';

@NgModule({
  imports: [
    NavModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    NavModule
  ]
})
export class HeaderModule { }
