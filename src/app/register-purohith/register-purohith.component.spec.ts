import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPurohithComponent } from './register-purohith.component';

describe('RegisterPurohithComponent', () => {
  let component: RegisterPurohithComponent;
  let fixture: ComponentFixture<RegisterPurohithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPurohithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPurohithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
