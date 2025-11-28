import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GondolaCardComponent } from './gondola-card.component';

describe('GondolaCardComponent', () => {
  let component: GondolaCardComponent;
  let fixture: ComponentFixture<GondolaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GondolaCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GondolaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
