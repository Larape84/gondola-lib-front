import {
  Component,
  Input,
  forwardRef
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gondola-single-checkbox-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './gondola-single-select-checklist.component.html',
  styleUrl: './gondola-single-select-checklist.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GondolaSingleCheckboxListComponent),
      multi: true
    }
  ]
})
export class GondolaSingleCheckboxListComponent implements ControlValueAccessor {
  @Input() options: { name: string; value: any }[] = [];
  @Input() direction: 'horizontal' | 'vertical' = 'horizontal';

  selectedValue: any = null;

  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.selectedValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  selectValue(value: any): void {
    this.selectedValue = this.selectedValue === value ? null : value;
    this.onChange(this.selectedValue);
    this.onTouched();
  }
}
