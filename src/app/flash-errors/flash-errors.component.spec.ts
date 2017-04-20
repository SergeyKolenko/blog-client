import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashErrorsComponent } from './flash-errors.component';

describe('FlashErrorsComponent', () => {
  let component: FlashErrorsComponent;
  let fixture: ComponentFixture<FlashErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
