import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostExpComponent } from './post-exp.component';

describe('PostExpComponent', () => {
  let component: PostExpComponent;
  let fixture: ComponentFixture<PostExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
