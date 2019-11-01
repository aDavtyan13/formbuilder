import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdFieldComponent } from './third-field.component';

describe('ThirdFieldComponent', () => {
  let component: ThirdFieldComponent;
  let fixture: ComponentFixture<ThirdFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
