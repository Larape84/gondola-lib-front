import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
   selector: '[GondolaSteper]',
   standalone: true,
})
export class GondolaSteperDirective implements OnInit {
   @Input('GondolaSteper') customClass?: string;

   constructor(
      private el: ElementRef,
      private renderer: Renderer2
   ) {}

   ngOnInit() {
      const host = this.el.nativeElement as HTMLElement;

      this.renderer.setStyle(host, 'width', '100%');
      this.renderer.addClass(host, 'steper-new');

      if (!document.getElementById('custom-stepper-style')) {
         const styleEl = this.renderer.createElement('style');
         this.renderer.setAttribute(styleEl, 'id', 'custom-stepper-style');

         styleEl.innerHTML = /* css */ `
            .steper-new .p-steps .p-steps-item .p-menuitem-link:focus {
               outline: none !important;
               box-shadow: none !important;
            }

            .p-steps .p-steps-item:before {
               top: 80%;
               border-top: 1px solid #97d700;
            }

            p-steps {
               width: 100%;
            }

            .steper-new ul li:first-child {
               justify-content: start;
            }
            .steper-new ul li:last-child {
               justify-content: end;
            }

            ul li:only-child {
               flex: none;
               margin-inline: auto;
            }

            span.p-steps-number {
               cursor: pointer;
            }
         `;
         document.head.appendChild(styleEl);
      }
   }
}
