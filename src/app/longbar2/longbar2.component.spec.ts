import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Longbar2Component } from './longbar2.component';

describe('Longbar2Component', () => {
  let component: Longbar2Component;
  let fixture: ComponentFixture<Longbar2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Longbar2Component]
    });
    fixture = TestBed.createComponent(Longbar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
