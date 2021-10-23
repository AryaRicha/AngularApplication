import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginexerciseComponent } from './loginexercise.component';

describe('LoginexerciseComponent', () => {
  let component: LoginexerciseComponent;
  let fixture: ComponentFixture<LoginexerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginexerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginexerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
