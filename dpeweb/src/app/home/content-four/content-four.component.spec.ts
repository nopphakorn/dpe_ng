import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFourComponent } from './content-four.component';

describe('ContentFourComponent', () => {
  let component: ContentFourComponent;
  let fixture: ComponentFixture<ContentFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
