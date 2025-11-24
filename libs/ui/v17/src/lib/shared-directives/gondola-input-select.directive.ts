import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
   selector: '[GondolaInputSelect]',
   standalone: true,
})
export class GondolaInputSelectDirective {
   @Input('GondolaInputSelect') customClass?: string;
   @Input() customStyles?: { [key: string]: string };
   @Input() customAttributes?: { [key: string]: string };
   @Input() flatMode?: boolean = false;
   @Input() textFull?: boolean = false;

   constructor(
      private readonly el: ElementRef,
      private readonly renderer: Renderer2
   ) {}

   ngOnInit(): void {
      if (this.customClass) {
         this.renderer.addClass(this.el.nativeElement, this.customClass);
      }

      const host = this.el.nativeElement;

      setTimeout(() => {
         const primerDiv = host.querySelector('div');
         const span = host.querySelector('span');

         if (primerDiv) {
            this.renderer.setStyle(primerDiv, 'width', '100%');
            this.renderer.setStyle(primerDiv, 'minHeight', '36px');
            this.renderer.setStyle(primerDiv, 'align-items', 'center');
            this.renderer.setStyle(primerDiv, 'display', 'flex');
            this.renderer.setStyle(primerDiv, 'borderRadius', '30px');
            this.renderer.setStyle(
               primerDiv,
               'boxShadow',
               '3px 3px 6px 0px rgba(196, 199, 212, 0.5019607843) inset, -3px -3px 6px 0px #ffffff inset'
            );
         }

         if (span) {
            this.renderer.setStyle(span, 'padding', '7px  10px');

            if (this.textFull) {
               this.renderer.setStyle(span, 'white-space', 'normal');
            }
         }

         if (this.flatMode) {
            this.renderer.setStyle(
               primerDiv,
               'boxShadow',
               '2px 2px 2px 0px rgba(0, 0, 0, 0.1019607843), 0px 2px 0px 0px #ffffff inset'
            );
            this.renderer.setStyle(span, 'fontWeight', '400');
            this.renderer.setStyle(span, 'color', 'black');
         }

         if (this.customStyles) {
            for (const key in this.customStyles) {
               if (this.customStyles.hasOwnProperty(key)) {
                  this.renderer.setStyle(
                     primerDiv,
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
      });
   }
}
