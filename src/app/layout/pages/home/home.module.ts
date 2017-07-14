import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// TRANSLATE
import { TranslateModule } from '@ngx-translate/core';

// RELATED
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';


// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,

    // TRANSLATE
    TranslateModule.forChild(),

  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
