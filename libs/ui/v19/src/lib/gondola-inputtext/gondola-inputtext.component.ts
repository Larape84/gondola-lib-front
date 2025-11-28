import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  input,
  InputSignal,
  model,
  ModelSignal,
  Output,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { InputTextModule } from 'primeng-v19/inputtext';

@Component({
  selector: 'app-gondola-inputtext',
  imports: [InputTextModule, FormsModule],
  templateUrl: './gondola-inputtext.component.html',
  styleUrl: './gondola-inputtext.component.scss',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GondolaInputtextComponent),
      multi: true,
    },
  ],
})
export class GondolaInputtextComponent implements ControlValueAccessor {
  textValue: ModelSignal<string> = model('');
  placeholder: InputSignal<string> = input<string>('');
  @Input() disabled: boolean = false;
  readOnly: InputSignal<boolean> = input<boolean>(false);
  @Output() clickEvent: EventEmitter<any> = new EventEmitter<any>();
  value?: string;
  clickEmit() {
    this.clickEvent.emit();
  }
  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.textValue.set(value);
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  onValueChange() {
    if (this.value) {
      this.textValue.set(this.value);
      this.onChange(this.value);
      this.onTouched();
    }
  }
}
