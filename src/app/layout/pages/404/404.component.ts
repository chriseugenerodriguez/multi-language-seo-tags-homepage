import { Component, OnInit } from '@angular/core';

// SEO
import { Meta, Title } from '@angular/platform-browser';

// TRANSLATE
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-404',
  templateUrl: './404.component.html'
})

export class NotFoundComponent implements OnInit {

  constructor(public meta: Meta, public title: Title, public translate: TranslateService) {}

  ngOnInit(): void {

    this.title.setTitle(this.translate.instant('META.404.TITLE'));
    this.meta.updateTag({name: 'description', content: this.translate.instant('META.404.DESCRIPTION')});

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.title.setTitle(this.translate.instant('META.404.TITLE'));
      this.meta.updateTag({name: 'description', content: this.translate.instant('META.404.DESCRIPTION')});
    });
  }

}
