import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GondolaCheckboxComponent } from './gondola-checkbox.component';

describe('GondolaCheckboxComponent', () => {
  let component: GondolaCheckboxComponent;
  let fixture: ComponentFixture<GondolaCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GondolaCheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GondolaCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
