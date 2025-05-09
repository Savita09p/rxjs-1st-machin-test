import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserName1Component } from './user-name1.component';

describe('UserName1Component', () => {
  let component: UserName1Component;
  let fixture: ComponentFixture<UserName1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserName1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserName1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
