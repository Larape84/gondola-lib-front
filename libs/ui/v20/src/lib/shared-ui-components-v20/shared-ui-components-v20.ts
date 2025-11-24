import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'lib-shared-ui-components-v20',
  standalone: true,
  imports: [ButtonModule, DatePickerModule, FormsModule],
  templateUrl: './shared-ui-components-v20.html',
  styleUrl: './shared-ui-components-v20.css',
})
export class SharedUiComponentsV20 {
  public date: Date | null = null;
}
