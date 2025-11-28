import { Component, Input, forwardRef } from '@angular/core';
import { TextareaModule } from 'primeng-v19/textarea';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-gondola-textarea',
  standalone: true,
  imports: [ReactiveFormsModule, TextareaModule, FormsModule],
  templateUrl: './gondola-textarea.component.html',
  styleUrl: './gondola-textarea.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GondolaTextareaComponent),
      multi: true,
    },
  ],
})
export class GondolaTextareaComponent implements ControlValueAccessor {
  @Input() placeholder = '';
  @Input() rows = 5;
  @Input() cols = 20;

  value = '';

  // Funciones que Angular le inyecta al componente
  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Puedes implementar esto si deseas manejar el estado disabled
  }

  onInput(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    this.value = target.value;
    this.onChange(this.value);
    this.onTouched();
  }
}
