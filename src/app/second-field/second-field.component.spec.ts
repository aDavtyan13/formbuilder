import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondFieldComponent } from './second-field.component';

describe('SecondFieldComponent', () => {
  let component: SecondFieldComponent;
  let fixture: ComponentFixture<SecondFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
