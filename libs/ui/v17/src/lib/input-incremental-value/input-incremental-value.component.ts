import {
  Component,
  input,
  InputSignal,
  model,
  ModelSignal,
  OnInit,
  output,
  OutputEmitterRef,
} from '@angular/core';
import { CustomIconsComponent } from '../custom-icons/custom-icons.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng-v17/button';
import { InputNumberModule } from 'primeng-v17/inputnumber';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-incremental-value',
  standalone: true,
  imports: [
    FormsModule,
    CustomIconsComponent,
    InputNumberModule,
    CommonModule,
    ButtonModule,
  ],
  templateUrl: './input-incremental-value.component.html',
  styleUrl: './input-incremental-value.component.scss',
})
export class InputIncrementalValueComponent implements OnInit {
  numberValue: ModelSignal<number> = model(0);
  onlyNaturalNumbers: InputSignal<boolean> = input<boolean>(false);
  maxInitialValue: InputSignal<boolean> = input<boolean>(false);
  minInitialValue: InputSignal<boolean> = input<boolean>(false);
  incrementalValue: InputSignal<number> = input<number>(1);
  incrementalEvent: OutputEmitterRef<number> = output<number>();
  inputId: InputSignal<string> = input<string>('');
  placeholder: InputSignal<string> = input<string>('');
  mode: InputSignal<string> = input<string>('decimal');
  currency: InputSignal<string> = input<string>('USD');
  locale: InputSignal<string> = input<string>('en-US');
  prefix: InputSignal<string> = input<string>('');
  suffix: InputSignal<string> = input<string>('');
  min: ModelSignal<number | null> = model<number | null>(null);
  max: ModelSignal<number | null> = model<number | null>(null);
  minDecimal: InputSignal<number | null> = input<number | null>(null);
  maxDecimal: InputSignal<number | null> = input<number | null>(null);
  disabled: InputSignal<boolean> = input<boolean>(false);
  readOnly: InputSignal<boolean> = input<boolean>(true);
  clickEvent: OutputEmitterRef<void> = output<void>();
  changeValueEvent: OutputEmitterRef<number> = output<number>();

  constructor() {}

  ngOnInit(): void {
    if (this.maxInitialValue() && !this.max()) {
      this.max.set(this.numberValue());
    }

    if (this.minInitialValue() && !this.min()) {
      this.min.set(this.numberValue());
    }
  }

  clickEmit() {
    this.clickEvent.emit();
  }

  changeEmit() {
    this.changeValueEvent.emit(this.numberValue());
  }

  incrementalEmit() {
    this.numberValue.set(this.numberValue() + this.incrementalValue());
  }

  decrementalEmit() {
    this.numberValue.set(this.numberValue() - this.incrementalValue());
  }

  verifyDisabledDecremental(): boolean {
    if (this.numberValue() <= 0) {
      return true;
    }

    if (this.min() !== null && this.numberValue() <= (this.min() ?? 0)) {
      return true;
    }

    return false;
  }

  verifyDisabledIncremental(): boolean {
    if (this.max() !== null && this.numberValue() >= (this.max() ?? 0)) {
      return true;
    }

    return false;
  }
}
