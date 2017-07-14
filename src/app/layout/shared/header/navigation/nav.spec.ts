import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavComponent } from './nav.component';
import { APP_BASE_HREF } from '@angular/common';

// ROUTES
import { RouterModule } from '@angular/router';

// TRANSLATE
import {TranslateModule} from '@ngx-translate/core';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavComponent ],
       imports: [
        TranslateModule.forRoot(),
        RouterModule.forRoot([]),
       ],
       providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
