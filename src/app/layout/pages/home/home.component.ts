import { Component, OnInit } from '@angular/core';

// SEO
import { Meta, Title } from '@angular/platform-browser';

// TRANSLATE
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  moduleId: module.id,
  selector: 'phx-home',
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

  constructor(public meta: Meta, public title: Title, public translate: TranslateService) {}

  ngOnInit(): void {

    this.title.setTitle(this.translate.instant('META.HOME.TITLE'));
    this.meta.updateTag({name: 'description', content: this.translate.instant('META.HOME.DESCRIPTION')});

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.title.setTitle(this.translate.instant('META.HOME.TITLE'));
      this.meta.updateTag({name: 'description', content: this.translate.instant('META.HOME.DESCRIPTION')});
    });
  }
}
