import {
   Directive,
   ElementRef,
   HostListener,
   Input,
   Renderer2,
} from '@angular/core';

@Directive({
   selector: '[GondolaInputText]',
   standalone: true,
})
export class GondolaInputTextDirective {
   @Input('GondolaInputText') customClass?: string;
   @Input() customStyles?: { [key: string]: string };
   @Input() customAttributes?: { [key: string]: string };
   @Input() inconField?: boolean = false;
   @Input() boxShadow?: boolean = true;

   constructor(
      private el: ElementRef,
      private renderer: Renderer2
   ) {}

   ngOnInit(): void {
      if (this.customClass) {
         this.renderer.addClass(this.el.nativeElement, this.customClass);
      }

      this.renderer.setStyle(this.el.nativeElement, 'borderRadius', '30px');
      this.renderer.setStyle(this.el.nativeElement, 'padding', '6px');
      this.renderer.setStyle(this.el.nativeElement, 'padding-left', '8px');
      this.renderer.setStyle(this.el.nativeElement, 'font-size', '16px');

      this.renderer.setStyle(this.el.nativeElement, 'font-weight', '500');

      this.renderer.setStyle(this.el.nativeElement, 'width', '100%');
      this.renderer.setStyle(
         this.el.nativeElement,
         'border',
         '1px solid #80808057'
      );

      this.renderer.setStyle(this.el.nativeElement, 'height', '35px');

      this.renderer.setStyle(
         this.el.nativeElement,
         'boxShadow',
         this.boxShadow
            ? '3px 3px 6px 0px #c4c7d4 inset, -3px -3px 6px 0px #ffffff inset'
            : 'none'
      );

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

   @HostListener('focusin')
   onFocusIn(): void {
      this.renderer.setStyle(
         this.el.nativeElement,
         'outline',
         '1px solid #712cee'
      );
   }

   @HostListener('focusout')
   onFocusOut(): void {
      this.renderer.setStyle(this.el.nativeElement, 'outline', 'transparent');
   }

   @HostListener('mouseenter')
   onMouseEnter(): void {
      this.renderer.setStyle(
         this.el.nativeElement,
         'outline',
         '1px solid #712cee'
      );
   }

   @HostListener('mouseleave')
   onMouseLeave(): void {
      this.renderer.setStyle(this.el.nativeElement, 'outline', 'transparent');
   }
}
