import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedUiComponentsV16 } from '@gondola-librery-front/shared-ui-components-v16';
import { SharedUiComponentsV20 } from '@gondola-librery-front/shared-ui-components-v20';
import { SharedUiComponentsV17 } from '../../../../libs/ui/v17/src/lib/shared-ui-components-v17/shared-ui-components-v17';
@Component({
  imports: [
    RouterModule,
    SharedUiComponentsV16,
    SharedUiComponentsV20,
    SharedUiComponentsV17,
  ],
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'gondola-librery-front';
}
