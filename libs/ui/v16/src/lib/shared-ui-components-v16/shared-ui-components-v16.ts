import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng-v16/button';
import { CalendarModule } from 'primeng-v16/calendar';

@Component({
  selector: 'lib-shared-ui-components-v16',
  templateUrl: './shared-ui-components-v16.html',
  styleUrls: ['./shared-ui-components-v16.css'],
  imports: [ButtonModule, CalendarModule, FormsModule],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SharedUiComponentsV16 {
  date: Date | undefined;
}
