import { BrowserModule } from '@angular/platform-browser';
import { Inject, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router';

// TRANSLATE
import { TranslateModule, TranslateLoader, TranslateService, MissingTranslationHandler } from '@ngx-translate/core';
import { translateFactory, DefaultMissingTranslationHandler } from './core/factories/translate.browser.factory';

import { AppComponent } from './app.component';
export { AppComponent };
import { routes } from './app-routing.module';

// PAGES
import { HomeModule, NotFoundModule, TestModule } from './layout/pages/index'

// SHARED
import { HeaderModule, FooterModule } from './layout/shared/index';

@NgModule({
  declarations: [AppComponent],
  imports: [

    HttpModule,

    // TRANSLATE
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateFactory,
        deps: [Http]
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: DefaultMissingTranslationHandler
      }
    }),

    // UNIVERSAL
    BrowserModule.withServerTransition({appId: 'd'}),
    RouterModule.forRoot(routes),

    // PAGES
    HomeModule,
    TestModule,
    NotFoundModule,

    // TEMPLATE
    HeaderModule,
    FooterModule
  ],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule {}
