import {
  Component,
  input,
  Input,
  InputSignal,
  model,
  ModelSignal,
  OnChanges,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { DropdownModule } from 'primeng-v17/dropdown';
import { FloatLabelModule } from 'primeng-v17/floatlabel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gondola-dropdown',
  standalone: true,
  imports: [DropdownModule, FloatLabelModule, FormsModule, CommonModule],
  templateUrl: './gondola-dropdown.component.html',
  styleUrl: './gondola-dropdown.component.scss',
})
export class GondolaDropdownComponent implements OnChanges {
  optionList: ModelSignal<any[]> = model([] as any[]);
  optionSelect: ModelSignal<any | undefined> = model(
    undefined as any | undefined
  );
  optionLabel: InputSignal<string> = input<string>('name');
  floatLabel: InputSignal<boolean> = input<boolean>(false);
  placeholder: InputSignal<string> = input<string>('');
  filter: InputSignal<boolean> = input<boolean>(true);
  disabled: InputSignal<boolean> = input<boolean>(false);
  filterBy: InputSignal<string> = input<string>('name');
  appendTo: InputSignal<string> = input<string>('body');
  showClear: InputSignal<boolean> = input<boolean>(true);
  virtualScroll: InputSignal<boolean> = input<boolean>(false);
  virtualScrollItemSize: InputSignal<number> = input<number>(38);

  @Input() selectItemCustom?: TemplateRef<any>;
  @Input() itemListCustom?: TemplateRef<any>;
  @Input() headerCustom?: TemplateRef<any>;
  @Input() dropIconCustom?: TemplateRef<any>;
  @Input() footerCustom?: TemplateRef<any>;

  ngOnChanges(changes: SimpleChanges): void {}
}
