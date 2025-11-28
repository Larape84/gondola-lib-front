import {
  Component,
  input,
  InputSignal,
  model,
  ModelSignal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng-v17/multiselect';
import { FloatLabelModule } from 'primeng-v17/floatlabel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gondola-multiselect',
  standalone: true,
  imports: [CommonModule, FormsModule, MultiSelectModule, FloatLabelModule],
  templateUrl: './gondola-multiselect.component.html',
  styleUrl: './gondola-multiselect.component.scss',
})
export class GondolaMultiselectComponent {
  optionList: ModelSignal<any[]> = model([] as any[]);
  optionsSelect: ModelSignal<any[]> = model([] as any[]);
  optionLabel: InputSignal<string> = input<string>('name');
  floatLabel: InputSignal<boolean> = input<boolean>(false);
  appendTo: InputSignal<string | null> = input<string | null>('body');
  placeholder: InputSignal<string> = input<string>('');
  filter: InputSignal<boolean> = input<boolean>(true);
  disabled: InputSignal<boolean> = input<boolean>(false);
  filterBy: InputSignal<string> = input<string>('name');
  showClear: InputSignal<boolean> = input<boolean>(true);
  maxSelectedLabels: InputSignal<number> = input<number>(3);
  virtualScroll: InputSignal<boolean> = input<boolean>(false);
  virtualScrollItemSize: InputSignal<number> = input<number>(100);
}
