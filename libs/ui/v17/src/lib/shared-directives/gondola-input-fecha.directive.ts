import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[GondolaInputFecha]',
  standalone: true,
})
export class GondolaInputFechaDirective {
  @Input('GondolaInputFecha') customClass?: string;
  @Input() customStyles?: { [key: string]: string };
  @Input() customAttributes?: { [key: string]: string };
  @Input() flatMode?: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (this.customClass) {
      this.renderer.addClass(this.el.nativeElement, this.customClass);
    }

    setTimeout(() => {
      const host = this.el.nativeElement;

      const input: HTMLInputElement | null = host.querySelector('input');

      const span: HTMLInputElement | null = host.querySelector('span');

      if (span) {
        this.renderer.setStyle(span, 'width', '100%');
      }

      if (input) {
        this.renderer.setStyle(input, 'borderRadius', '30px');
        this.renderer.setStyle(input, 'padding', '5px 5px 5px 14px');
        this.renderer.setStyle(input, 'height', '36px');

        this.renderer.setStyle(
          input,
          'boxShadow',
          '3px 3px 6px 0px rgba(196, 199, 212, 0.5019607843) inset, -3px -3px 6px 0px #ffffff inset'
        );
      }

      if (this.flatMode) {
        this.renderer.setStyle(
          input,
          'boxShadow',
          '2px 2px 2px 0px rgba(0, 0, 0, 0.1019607843), 0px 2px 0px 0px #ffffff inset'
        );
        this.renderer.setStyle(input, 'fontWeight', '400');
        this.renderer.setStyle(input, 'color', 'black');
      }

      if (this.customStyles) {
        for (const key in this.customStyles) {
          if (this.customStyles.hasOwnProperty(key)) {
            this.renderer.setStyle(input, key, this.customStyles[key]);
          }
        }
      }

      if (this.customAttributes) {
        for (const key in this.customAttributes) {
          if (this.customAttributes.hasOwnProperty(key)) {
            this.renderer.setAttribute(input, key, this.customAttributes[key]);
          }
        }
      }
    });
  }
}
