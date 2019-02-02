import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDashboadComponent } from './post-dashboad.component';

describe('PostDashboadComponent', () => {
  let component: PostDashboadComponent;
  let fixture: ComponentFixture<PostDashboadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDashboadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDashboadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
