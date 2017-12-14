import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryWallComponent } from './history-wall.component';

describe('HistoryWallComponent', () => {
  let component: HistoryWallComponent;
  let fixture: ComponentFixture<HistoryWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
