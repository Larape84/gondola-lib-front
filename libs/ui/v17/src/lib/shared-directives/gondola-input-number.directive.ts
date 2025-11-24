import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
   selector: '[GondolaInputNumber]',
   standalone: true,
})
export class GondolaInputNumberDirective {
   @Input('GondolaInputNumber') customClass?: string;
   @Input() customStyles?: { [key: string]: string };
   @Input() customAttributes?: { [key: string]: string };
   @Input() inconField?: boolean = false;

   constructor(
      private el: ElementRef,
      private renderer: Renderer2
   ) {}

   ngOnInit(): void {
      if (this.customClass) {
         this.renderer.addClass(this.el.nativeElement, this.customClass);
      }

      const host = this.el.nativeElement;
      const input = host.querySelector('input');
      const span = host.querySelector('span');

      this.renderer.setStyle(input, 'borderRadius', '30px');
      this.renderer.setStyle(input, 'minWidth', '0px');
      this.renderer.setStyle(span, 'width', '100%');
      this.renderer.setStyle(input, 'width', '100%');

      this.renderer.setStyle(
         input,
         'boxShadow',
         '3px 3px 6px 0px #c4c7d4 inset, -3px -3px 6px 0px #ffffff inset'
      );

      this.renderer.setStyle(this.el.nativeElement, 'height', '35px');
      this.renderer.setStyle(this.el.nativeElement, 'width', '100%');

      if (this.inconField) {
         this.renderer.setStyle(
            this.el.nativeElement,
            'padding-left',
            '2.5rem'
         );
      }

      if (this.customStyles) {
         for (const key in this.customStyles) {
            if (this.customStyles.hasOwnProperty(key)) {
               this.renderer.setStyle(
                  this.el.nativeElement,
                  key,
                  this.customStyles[key]
               );
            }
         }
      }

      if (this.customAttributes) {
         for (const key in this.customAttributes) {
            if (this.customAttributes.hasOwnProperty(key)) {
               this.renderer.setAttribute(
                  this.el.nativeElement,
                  key,
                  this.customAttributes[key]
               );
            }
         }
      }
   }
}
