import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GondolaCalendarComponent } from './gondola-calendar.component';

describe('GondolaCalendarComponent', () => {
  let component: GondolaCalendarComponent;
  let fixture: ComponentFixture<GondolaCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GondolaCalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GondolaCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
