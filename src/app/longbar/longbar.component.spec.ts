import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongbarComponent } from './longbar.component';

describe('LongbarComponent', () => {
  let component: LongbarComponent;
  let fixture: ComponentFixture<LongbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LongbarComponent]
    });
    fixture = TestBed.createComponent(LongbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
