import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './testing.component';
import { Router, RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

class MockRouter { public navigate() {}; }

describe('TestingComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent ],
       providers: [
         {provide: Router,  useClass: MockRouter },
          RouterOutlet
       ],
       imports: [
         RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});
