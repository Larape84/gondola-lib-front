import {
  Component,
  forwardRef,
  input,
  InputSignal,
  model,
  ModelSignal,
  OnInit,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { DatePickerModule } from 'primeng-v19/datepicker';

@Component({
  selector: 'app-gondola-calendar',
  imports: [FormsModule, DatePickerModule],
  templateUrl: './gondola-calendar.component.html',
  styleUrl: './gondola-calendar.component.scss',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GondolaCalendarComponent),
      multi: true,
    },
  ],
})
export class GondolaCalendarComponent implements ControlValueAccessor, OnInit {
  isRange: InputSignal<boolean> = input<boolean>(false);
  currentDate: ModelSignal<Date> = model(new Date());
  rangeDates: ModelSignal<Date[]> = model([] as Date[]);
  placeholder: InputSignal<string> = input<string>('');
  showTime: InputSignal<boolean> = input(false);
  formatHour: InputSignal<string> = input<string>('12');
  maxDate: InputSignal<Date | undefined> = input<Date | undefined>(undefined);
  minDate: InputSignal<Date | undefined> = input<Date | undefined>(undefined);

  value: Date | Date[] = this.isRange() ? [] : new Date();

  onChange = (_: any) => {};
  onTouched = () => {};

  ngOnInit() {
    this.value = this.isRange() ? [] : new Date();
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Optional: puedes manejar el estado disabled aquí
  }

  onValueChange(value: any) {
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }
}
