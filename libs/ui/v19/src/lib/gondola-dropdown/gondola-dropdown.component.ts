import {
  Component,
  forwardRef,
  Input,
  input,
  InputSignal,
  model,
  ModelSignal,
  OnChanges,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { SelectModule } from 'primeng-v19/select';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
export interface DropOptions {
  name: string;
  value: any;
  query?: any[];
}

@Component({
  selector: 'app-gondola-dropdown',
  imports: [SelectModule, FormsModule, CommonModule],
  templateUrl: './gondola-dropdown.component.html',
  styleUrl: './gondola-dropdown.component.scss',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GondolaDropdownComponent),
      multi: true,
    },
  ],
})
export class GondolaDropdownComponent
  implements ControlValueAccessor, OnChanges
{
  optionList: ModelSignal<DropOptions[]> = model([] as DropOptions[]);
  optionSelect: ModelSignal<DropOptions | undefined> = model(
    undefined as DropOptions | undefined
  );
  optionLabel: InputSignal<string> = input<string>('name');
  placeholder: InputSignal<string> = input<string>('');
  filter: InputSignal<boolean> = input<boolean>(true);
  @Input() disabled: boolean = false;
  filterBy: InputSignal<string> = input<string>('name');
  showClear: InputSignal<boolean> = input<boolean>(true);

  @Input() selectItemCustom?: TemplateRef<any>;
  @Input() itemListCustom?: TemplateRef<any>;
  @Input() headerCustom?: TemplateRef<any>;
  @Input() dropIconCustom?: TemplateRef<any>;
  @Input() footerCustom?: TemplateRef<any>;
  value?: DropOptions;

  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: DropOptions): void {
    this.optionSelect.set(value);
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

  onValueChange(event: DropOptions) {
    this.optionSelect.set(event);
    this.onChange(event);
    this.onTouched();
  }
  ngOnChanges(changes: SimpleChanges): void {}
}
