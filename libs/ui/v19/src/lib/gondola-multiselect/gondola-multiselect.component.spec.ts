import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GondolaMultiselectComponent } from './gondola-multiselect.component';

describe('GondolaMultiselectComponent', () => {
  let component: GondolaMultiselectComponent;
  let fixture: ComponentFixture<GondolaMultiselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GondolaMultiselectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GondolaMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
