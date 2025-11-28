import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-icons',
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './custom-icons.component.html',
  styleUrl: './custom-icons.component.scss',
  standalone:true
})
export class CustomIconsComponent {
  @Input('name') name: string = '';
  @Input('color') color: string = '#fff';
  @Input('secundaryColor') secundaryColor: string = '';
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
