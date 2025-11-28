import { CommonModule } from '@angular/common';
import {
  Component,
  input,
  InputSignal,
  model,
  ModelSignal,
  OnChanges,
  output,
  OutputEmitterRef,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng-v17/floatlabel';
import { InputTextModule } from 'primeng-v17/inputtext';
import { IconFieldModule } from 'primeng-v17/iconfield';
import { InputIconModule } from 'primeng-v17/inputicon';
import { TooltipModule } from 'primeng-v17/tooltip';
import { CustomIconsComponent } from '../custom-icons/custom-icons.component';

@Component({
  selector: 'app-gondola-inputtext',
  standalone: true,
  imports: [
    InputTextModule,
    InputIconModule,
    IconFieldModule,
    FloatLabelModule,
    CommonModule,
    FormsModule,
    TooltipModule,
    CustomIconsComponent,
  ],
  templateUrl: './gondola-inputtext.component.html',
  styleUrl: './gondola-inputtext.component.scss',
})
export class GondolaInputtextComponent implements OnChanges {
  floatLabel: InputSignal<boolean> = input<boolean>(false);
  textValue: ModelSignal<string> = model('');
  placeholder: InputSignal<string> = input<string>('');
  disabled: InputSignal<boolean> = input<boolean>(false);
  readOnly: InputSignal<boolean> = input<boolean>(false);
  clickEvent: OutputEmitterRef<void> = output<void>();
  inputEvent: OutputEmitterRef<Event> = output<Event>();
  leftIcon: InputSignal<string> = input<string>('');
  colorLeftIcon: InputSignal<string> = input<string>('#979797');
  tooltipText: ModelSignal<string> = model('');
  tooltipOptions: ModelSignal<any> = model({
    disabled: true,
    tooltipPosition: 'top',
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (this.tooltipText() !== '') {
      this.tooltipOptions().disabled = false;
    }
  }
  clickEmit() {
    this.clickEvent.emit();
  }

  inputEmit(e: Event) {
    this.inputEvent.emit(e);
  }
}
