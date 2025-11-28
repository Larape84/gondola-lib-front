import {
  Component,
  input,
  InputSignal,
  model,
  ModelSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng-v17/calendar';
import { FloatLabelModule } from 'primeng-v17/floatlabel';

@Component({
  selector: 'app-gondola-calendar',
  standalone: true,
  imports: [CommonModule, FormsModule, CalendarModule, FloatLabelModule],
  templateUrl: './gondola-calendar.component.html',
  styleUrl: './gondola-calendar.component.scss',
})
export class GondolaCalendarComponent {
  floatLabel: InputSignal<boolean> = input<boolean>(false);
  showClear: ModelSignal<boolean> = model(true);
  readonlyInput: ModelSignal<boolean> = model(true);
  appendTo: InputSignal<string | null> = input<string | null>(null);
  isRange: ModelSignal<boolean> = model(false);
  currentDate: ModelSignal<Date> = model(new Date());
  rangeDates: ModelSignal<Date[]> = model([] as Date[]);
  placeholder: InputSignal<string> = input<string>('');
  showTime: ModelSignal<boolean> = model(false);
  formatHour: InputSignal<string> = input<string>('12');
  maxDate: InputSignal<Date | undefined> = input<Date | undefined>(undefined);
  minDate: InputSignal<Date | undefined> = input<Date | undefined>(undefined);
  disabled: ModelSignal<boolean> = model(false);
}
