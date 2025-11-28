import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GondolaButtonsComponent } from './gondola-buttons.component';

describe('GondolaButtonsComponent', () => {
  let component: GondolaButtonsComponent;
  let fixture: ComponentFixture<GondolaButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GondolaButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GondolaButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
