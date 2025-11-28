import { CommonModule } from '@angular/common';
import {
  Component,
  input,
  InputSignal,
  model,
  ModelSignal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng-v17/calendar';
import { FloatLabelModule } from 'primeng-v17/floatlabel';

export interface DoubleDateOptions {
  showClear?: boolean;
  readonlyInput?: boolean;
  appendTo?: string | null;
  placeholder: string;
  showTime?: boolean;
  formatHour?: string;
  maxDate: Date | undefined;
  minDate: Date | undefined;
  currentMinDate: Date | undefined;
  disabled?: boolean;
}

@Component({
  selector: 'app-gondola-double-calendar',
  standalone: true,
  imports: [CommonModule, FormsModule, CalendarModule, FloatLabelModule],
  templateUrl: './gondola-double-calendar.component.html',
  styleUrl: './gondola-double-calendar.component.scss',
})
export class GondolaDoubleCalendarComponent {
  floatLabel: InputSignal<boolean> = input<boolean>(false);
  lockEndBeforeStart: InputSignal<boolean> = input<boolean>(false); //?Limita secondDate en base a firstDate
  firstDate: ModelSignal<Date | undefined> = model(
    undefined as Date | undefined
  );
  firstDateValue: Date | undefined;

  secondDate: ModelSignal<Date | undefined> = model(
    undefined as Date | undefined
  );
  secondDateValue: Date | undefined;

  firstDateOption: ModelSignal<DoubleDateOptions> = model({
    showClear: true,
    readonlyInput: true,
    appendTo: null,
    placeholder: 'Fecha Inicial',
    showTime: false,
    formatHour: '12',
    maxDate: undefined,
    minDate: undefined,
    currentMinDate: undefined,
    disabled: false,
  } as DoubleDateOptions);
  secondDateOption: ModelSignal<DoubleDateOptions> = model({
    showClear: true,
    readonlyInput: true,
    appendTo: null,
    placeholder: 'Fecha Final',
    showTime: false,
    formatHour: '12',
    maxDate: undefined,
    minDate: undefined,
    currentMinDate: undefined,
    disabled: false,
  } as DoubleDateOptions);

  validateFirstDateToSecondDate(value: any, index: number) {
    if (index === 0) {
      this.firstDate.set(value);
      this.changeCurrenMinDateLockEnd();
    } else {
      this.secondDate.set(value);
    }

    if (this.comparateFirstDateSeniorToSecondDate()) {
      this.secondDate.set(undefined);
    }
  }

  comparateFirstDateSeniorToSecondDate(): boolean {
    if (
      this.lockEndBeforeStart() &&
      this.firstDate &&
      this.secondDate &&
      (this.firstDate()?.getTime() ?? 0) > (this.secondDate()?.getTime() ?? 0)
    ) {
      return true;
    }

    return false;
  }

  changeCurrenMinDateLockEnd() {
    if (
      this.lockEndBeforeStart() &&
      (!this.secondDateOption().minDate ||
        (this.secondDateOption()?.minDate?.getTime() ?? 0) >
          (this.firstDate()?.getTime() ?? 0))
    ) {
      this.secondDateOption().currentMinDate = this.firstDate();
      this.secondDateOption.set(this.secondDateOption());
    } else {
      this.secondDateOption().currentMinDate = this.secondDateOption().minDate;
      this.secondDateOption.set(this.secondDateOption());
    }
  }
}
