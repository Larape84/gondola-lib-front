import { CommonModule } from '@angular/common';
import {
  Component,
  input,
  InputSignal,
  model,
  ModelSignal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng-v17/floatlabel';
import { InputTextareaModule } from 'primeng-v17/inputtextarea';

@Component({
  selector: 'app-gondola-textarea',
  standalone: true,
  imports: [FormsModule, InputTextareaModule, FloatLabelModule, CommonModule],
  templateUrl: './gondola-textarea.component.html',
  styleUrl: './gondola-textarea.component.scss',
})
export class GondolaTextareaComponent {
  floatLabel: InputSignal<boolean> = input<boolean>(false);
  textValue: ModelSignal<string> = model('');
  placeholder: InputSignal<string> = input<string>('');
  rows: InputSignal<number> = input<number>(5);
  cols: InputSignal<number> = input<number>(20);
}
