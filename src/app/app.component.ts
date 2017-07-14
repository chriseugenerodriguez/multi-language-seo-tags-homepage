import { Component } from '@angular/core';
import { environment } from '../environments/environment';

// TRANSLATE
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'phx-app',
  templateUrl: './app.component.html'
})
export class AppComponent {

   constructor(translate: TranslateService) {
    
    translate.addLangs(['dt', 'en', 'es', 'fr', 'it', 'ja', 'ko', 'pt', 'ru', 'zhs', 'zht'])
    translate.setDefaultLang('en');

    const lang: string = translate.getBrowserLang();

    translate.use(lang && lang.match(/dt,en,es,fr,it,ja,ko,pt,ru,zhs,zht/) ? lang : 'en' )
  }
}
