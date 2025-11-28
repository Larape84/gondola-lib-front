import {
  Component,
  input,
  InputSignal,
  model,
  ModelSignal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng-v19/multiselect';
import { DropOptions } from '../gondola-dropdown/gondola-dropdown.component';

@Component({
  selector: 'app-gondola-multiselect',
  imports: [FormsModule, MultiSelectModule],
  templateUrl: './gondola-multiselect.component.html',
  styleUrl: './gondola-multiselect.component.scss',
})
export class GondolaMultiselectComponent {
  optionList: ModelSignal<DropOptions[]> = model([] as DropOptions[]);
  optionsSelect: ModelSignal<DropOptions[]> = model([] as DropOptions[]);
  optionLabel: InputSignal<string> = input<string>('name');
  placeholder: InputSignal<string> = input<string>('');
  filter: InputSignal<boolean> = input<boolean>(true);
  disabled: InputSignal<boolean> = input<boolean>(false);
  filterBy: InputSignal<string> = input<string>('name');
  showClear: InputSignal<boolean> = input<boolean>(true);
  maxSelectedLabels: InputSignal<number> = input<number>(3);
}
