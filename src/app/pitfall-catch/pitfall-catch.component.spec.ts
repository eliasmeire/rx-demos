import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitfallCatchComponent } from './pitfall-catch.component';

describe('PitfallCatchComponent', () => {
  let component: PitfallCatchComponent;
  let fixture: ComponentFixture<PitfallCatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitfallCatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitfallCatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
