import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GondolaSingleSelectChecklistComponent } from './gondola-single-select-checklist.component';

describe('GondolaSingleSelectChecklistComponent', () => {
  let component: GondolaSingleSelectChecklistComponent;
  let fixture: ComponentFixture<GondolaSingleSelectChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GondolaSingleSelectChecklistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GondolaSingleSelectChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
