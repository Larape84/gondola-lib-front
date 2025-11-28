import { CommonModule } from '@angular/common';
import {
  Component,
  input,
  InputSignal,
  model,
  ModelSignal,
  output,
  OutputEmitterRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng-v17/floatlabel';
import { InputNumberModule } from 'primeng-v17/inputnumber';
@Component({
  selector: 'app-gondola-inputnumber',
  standalone: true,
  imports: [FormsModule, InputNumberModule, FloatLabelModule, CommonModule],
  templateUrl: './gondola-inputnumber.component.html',
  styleUrl: './gondola-inputnumber.component.scss',
})
export class GondolaInputnumberComponent {
  numberValue: ModelSignal<number> = model(0);
  floatLabel: InputSignal<boolean> = input<boolean>(false);
  inputId: InputSignal<string> = input<string>('');
  placeholder: InputSignal<string> = input<string>('');
  mode: InputSignal<string> = input<string>('decimal');
  currency: InputSignal<string> = input<string>('USD');
  locale: InputSignal<string> = input<string>('en-US');
  prefix: InputSignal<string> = input<string>('');
  suffix: InputSignal<string> = input<string>('');
  min: InputSignal<number | null> = input<number | null>(null);
  max: InputSignal<number | null> = input<number | null>(null);
  minDecimal: InputSignal<number | null> = input<number | null>(null);
  maxDecimal: InputSignal<number | null> = input<number | null>(null);
  disabled: InputSignal<boolean> = input<boolean>(false);
  readOnly: InputSignal<boolean> = input<boolean>(false);
  clickEvent: OutputEmitterRef<void> = output<void>();
  changeValueEvent: OutputEmitterRef<number> = output<number>();

  clickEmit() {
    this.clickEvent.emit();
  }

  changeEmit() {
    this.changeValueEvent.emit(this.numberValue());
  }
}
