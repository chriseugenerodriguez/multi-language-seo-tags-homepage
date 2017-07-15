import { Component, Inject, Injector, PLATFORM_ID } from '@angular/core';
import { environment } from '../environments/environment';
import { isPlatformServer } from '@angular/common';

// TRANSLATE
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'phx-app',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(translate: TranslateService, injector: Injector, @Inject(PLATFORM_ID) platformId: Object) {
    translate.addLangs(['dt', 'en', 'es', 'fr', 'it', 'ja', 'ko', 'pt', 'ru', 'zhs', 'zht'])
    translate.setDefaultLang('en');

    const lang = isPlatformServer(platformId) ?
      injector.get('request').headers['accept-language'] :
      translate.getBrowserLang();

    const match = (lang || '').match(/(dt|en|es|fr|it|ja|ko|pt|ru|zhs|zht)/);

    translate.use(match ? match[0] : 'en');
  }
}
