import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TjcHomeComponent } from './tjc-home.component';

describe('TjcHomeComponent', () => {
  let component: TjcHomeComponent;
  let fixture: ComponentFixture<TjcHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TjcHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TjcHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
