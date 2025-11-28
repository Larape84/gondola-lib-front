import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { ButtonModule } from 'primeng-v19/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gondola-buttons',
  imports: [ButtonModule, CommonModule],
  templateUrl: './gondola-buttons.component.html',
  styleUrl: './gondola-buttons.component.scss',
  standalone: true,
})
export class GondolaButtonsComponent implements OnInit {
  backgroundColorList: any[] = [
    {
      name: 'green-gradient',
      value: 'linear-gradient(180deg, #97d700 0%, #64a70b 100%);',
    },
    {
      name: 'green-dark-gradient',
      value: 'linear-gradient(180deg, #00b140 0%, #02792d 100%)',
    },
    {
      name: 'red-gradient',
      value: 'linear-gradient(180deg, #f9423a 0%, #d90900 100%)',
    },
    {
      name: 'orange-gradient',
      value: 'linear-gradient(180deg, #ff7a00 0%, #d16502 100%)',
    },
    {
      name: 'yellow-gradient',
      value: 'linear-gradient(180deg, #ffc727 0%, #dfaa11 100%)',
    },
    {
      name: 'purple-gradient',
      value: 'linear-gradient(180deg, #712cee 0%, #521ab7 100%)',
    },
    {
      name: 'cyan-gradient',
      value: 'linear-gradient(180deg, #00b5e2 0%, #0293b7 100%)',
    },
    {
      name: 'white-gradient',
      value: 'linear-gradient(180deg, #EDEFFF 0%, #E8E8E8 100%)',
    },
  ];

  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Input() icon: string = '';
  @Input() borderRadius: string = '24px';
  @Input() letterColor: string = '#fff';
  @Input() backgroundColor: string = '';
  @Input() customStyle: any = undefined;
  @Input() custonElements?: TemplateRef<any>;

  @Output() clickButton: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  selectedEvent() {
    this.clickButton.emit();
  }

  backgroundSelect(backClass: string): string {
    const background: any =
      this.backgroundColorList.find((color: any) => {
        return color.name === backClass;
      }) ?? this.backgroundColorList[0];

    return background.value;
  }
}
