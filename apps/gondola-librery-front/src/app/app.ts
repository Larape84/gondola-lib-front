import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedUiComponentsV16 } from '@gondola-librery-front/shared-ui-components-v16';
import { SharedUiComponentsV20 } from '@gondola-librery-front/shared-ui-components-v20';
@Component({
  imports: [RouterModule, SharedUiComponentsV16, SharedUiComponentsV20 ],
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'gondola-librery-front';
}
