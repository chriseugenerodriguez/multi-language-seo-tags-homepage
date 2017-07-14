import { Component } from '@angular/core';

// TRANSLATE
import {TranslateService} from '@ngx-translate/core';

// LAZY LOAD COMPONENT
@Component({
  moduleId: module.id,
  selector: 'header phx-nav',
  templateUrl: 'nav.component.html'
})
export class NavComponent {

  constructor(private translate: TranslateService) {}

  changeLanguage(lang) {
    this.translate.use(lang);
  }
}
