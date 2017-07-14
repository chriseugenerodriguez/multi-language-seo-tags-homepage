import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpModule, Http } from '@angular/http';

import {TranslateLoader, MissingTranslationHandler, MissingTranslationHandlerParams} from '@ngx-translate/core';
import {Observable} from 'rxjs/Observable';
const fs = require('fs');

export function translateFactory(http: Http) {
    return new TranslateHttpLoader(http, './assets/locales/', '.json');
}

export class DefaultMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    return 'missing translation for key: ' + params.key;
  }
}