import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Http } from '@angular/http';
import { HomeComponent } from './home.component';
import {Observable} from 'rxjs/Observable';
import {Injector} from '@angular/core';

// TRANSLATE
import {TranslateModule} from '@ngx-translate/core';

describe('Home Component', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
       imports: [
        TranslateModule.forRoot()
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
