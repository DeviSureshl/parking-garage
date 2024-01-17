import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBoardsComponent } from './display-boards.component';

describe('DisplayBoardsComponent', () => {
  let component: DisplayBoardsComponent;
  let fixture: ComponentFixture<DisplayBoardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayBoardsComponent]
    });
    fixture = TestBed.createComponent(DisplayBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
