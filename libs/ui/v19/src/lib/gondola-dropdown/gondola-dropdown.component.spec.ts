import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GondolaDropdownComponent } from './gondola-dropdown.component';

describe('GondolaDropdownComponent', () => {
  let component: GondolaDropdownComponent;
  let fixture: ComponentFixture<GondolaDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GondolaDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GondolaDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
