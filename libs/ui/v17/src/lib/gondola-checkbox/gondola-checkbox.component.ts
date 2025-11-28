import {
  Component,
  input,
  InputSignal,
  model,
  ModelSignal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng-v17/checkbox';

@Component({
  selector: 'app-gondola-checkbox',
  standalone: true,
  imports: [FormsModule, CheckboxModule],
  templateUrl: './gondola-checkbox.component.html',
  styleUrl: './gondola-checkbox.component.scss',
})
export class GondolaCheckboxComponent {
  checked: ModelSignal<boolean> = model(false);
  label: InputSignal<string> = input<string>('');
}
