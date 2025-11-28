import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-icons',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './custom-icons.component.html',
  styleUrl: './custom-icons.component.scss',
})
export class CustomIconsComponent {
  @Input('name') name: string = '';
  @Input('color') color: string = '#fff';
  @Input('width') width: string = '';
  @Input('height') height: string = '';
  constructor() {}

  checkDimensions(value: string, defaultValue: string | number): string {
    if (value !== '') {
      return value;
    }
    return String(defaultValue);
  }
}
