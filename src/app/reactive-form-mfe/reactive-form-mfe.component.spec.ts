import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormMfeComponent } from './reactive-form-mfe.component';

describe('ReactiveFormMfeComponent', () => {
  let component: ReactiveFormMfeComponent;
  let fixture: ComponentFixture<ReactiveFormMfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormMfeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormMfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
