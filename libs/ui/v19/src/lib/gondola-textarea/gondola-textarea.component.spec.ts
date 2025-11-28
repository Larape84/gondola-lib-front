import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GondolaTextareaComponent } from './gondola-textarea.component';

describe('GondolaTextareaComponent', () => {
  let component: GondolaTextareaComponent;
  let fixture: ComponentFixture<GondolaTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GondolaTextareaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GondolaTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
