import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
   selector: '[GondolaInputTextArea]',
   standalone: true,
})
export class GondolainputTextAreaDirective {
   @Input('GondolaInputTextArea') customClass?: string;
   @Input() customStyles?: { [key: string]: string };
   @Input() customAttributes?: { [key: string]: string };

   constructor(
      private el: ElementRef,
      private renderer: Renderer2
   ) {}

   ngOnInit(): void {
      if (this.customClass) {
         this.renderer.addClass(this.el.nativeElement, this.customClass);
      }

      if (this.el.nativeElement) {
         this.renderer.setStyle(this.el.nativeElement, 'borderRadius', '20px');
         this.renderer.setStyle(this.el.nativeElement, 'padding', '8px');
         this.renderer.setStyle(this.el.nativeElement, 'width', '100%');
         this.renderer.setStyle(this.el.nativeElement, 'minHeight', '120px');

         this.renderer.setStyle(
            this.el.nativeElement,
            'boxShadow',
            '3px 3px 6px 0px #c4c7d4 inset, -3px -3px 6px 0px #ffffff inset'
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
