import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserName3Component } from './user-name3.component';

describe('UserName3Component', () => {
  let component: UserName3Component;
  let fixture: ComponentFixture<UserName3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserName3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserName3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
