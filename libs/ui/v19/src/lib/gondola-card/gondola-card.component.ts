import {Component, input, Input, InputSignal, TemplateRef} from '@angular/core';
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-gondola-card',
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './gondola-card.component.html',
  styleUrl: './gondola-card.component.scss',
  standalone: true,
})
export class GondolaCardComponent {
title:InputSignal<string> = input<string>('');
@Input() footer?: TemplateRef<any>;
@Input() content?: TemplateRef<any>
}
