import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpCacheComponent } from './http-cache.component';

describe('HttpCacheComponent', () => {
  let component: HttpCacheComponent;
  let fixture: ComponentFixture<HttpCacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpCacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpCacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
