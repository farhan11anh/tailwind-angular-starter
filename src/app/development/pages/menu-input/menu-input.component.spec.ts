import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInputComponent } from './menu-input.component';

describe('MenuInputComponent', () => {
  let component: MenuInputComponent;
  let fixture: ComponentFixture<MenuInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuInputComponent]
    });
    fixture = TestBed.createComponent(MenuInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
