import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedUiComponentsV16 } from '@gondola-librery-front/shared-ui-components-v16';
import { SharedUiComponentsV20 } from '@gondola-librery-front/shared-ui-components-v20';
import { SharedUiComponentsV17 } from '@gondola-librery-front/shared-ui-components-v17';
import { componentesV16 } from './componentes-v16';
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
  public componentesV16 = componentesV16;
  public angularVersion = [
    'Angular 16',
    'Angular 17',
    'Angular 18',
    'Angular 19',
    'Angular 20',
  ];
}
