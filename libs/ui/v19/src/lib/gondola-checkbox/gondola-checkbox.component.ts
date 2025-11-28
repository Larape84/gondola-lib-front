import {
  Component,
  input,
  InputSignal,
  model,
  ModelSignal,
} from '@angular/core';
import { CheckboxModule } from 'primeng-v19/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gondola-checkbox',
  imports: [FormsModule, CheckboxModule],
  templateUrl: './gondola-checkbox.component.html',
  styleUrl: './gondola-checkbox.component.scss',
  standalone: true,
})
export class GondolaCheckboxComponent {
  checked: ModelSignal<boolean> = model(false);
  label: InputSignal<string> = input<string>('');
}
