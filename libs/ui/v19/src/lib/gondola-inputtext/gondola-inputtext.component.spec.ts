import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GondolaInputtextComponent } from './gondola-inputtext.component';

describe('GondolaInputtextComponent', () => {
  let component: GondolaInputtextComponent;
  let fixture: ComponentFixture<GondolaInputtextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GondolaInputtextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GondolaInputtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
