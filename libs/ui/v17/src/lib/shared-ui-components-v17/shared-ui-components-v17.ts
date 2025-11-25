import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng-v17/calendar';

@Component({
  selector: 'lib-shared-ui-compsonents-v17',
  imports: [CalendarModule, FormsModule],
  standalone: true,
  templateUrl: './shared-ui-components-v17.html',
  styleUrl: './shared-ui-components-v17.css',
})
export class SharedUiComponentsV17 {
  date: Date | null = null;
}
