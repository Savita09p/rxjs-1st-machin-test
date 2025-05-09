import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserName2Component } from './user-name2.component';

describe('UserName2Component', () => {
  let component: UserName2Component;
  let fixture: ComponentFixture<UserName2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserName2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserName2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
