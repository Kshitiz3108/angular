import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserVerifyComponent } from './admin-user-verify.component';

describe('AdminUserVerifyComponent', () => {
  let component: AdminUserVerifyComponent;
  let fixture: ComponentFixture<AdminUserVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
