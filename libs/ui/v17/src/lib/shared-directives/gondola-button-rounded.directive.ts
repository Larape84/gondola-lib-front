import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
   selector: '[GondolaButtonRounded]',
   standalone: true,
})
export class GondolaButtonRoundedDirective implements OnInit {
   @Input('GondolaButtonRounded') customClass?: string;
   @Input() customColor?:
      | 'purple'
      | 'blue'
      | 'orange'
      | 'green'
      | 'red'
      | 'gray'
      | 'transparent'
      | 'black' = 'purple';

   constructor(
      private el: ElementRef,
      private renderer: Renderer2
   ) {}

   ngOnInit() {
      const host = this.el.nativeElement as HTMLElement;

      this.renderer.addClass(host, 'GondolaButtonRounded');

      if (this.customClass) {
         this.renderer.addClass(host, this.customClass);
      }

      const colors = {
         purple: `linear-gradient(180deg,#541bbb 0%,rgba(110, 43, 236, 0.7607843137) 100%)`,
         blue: `linear-gradient(26deg,#028fb2 0%,rgba(76, 192, 221, 0.6509803922) 100%)`,
         orange: `linear-gradient(26deg,#d39100 0%,rgba(251, 171, 0, 0.7058823529) 100%)`,
         green: `linear-gradient(26deg, #62a109 0%, rgba(169, 213, 81, 0.6980392157) 100%)`,
         red: `linear-gradient(26deg, #da0b02 0%, rgba(245, 83, 75, 0.7411764706) 100%)`,
         black: `linear-gradient(297deg, rgb(10 10 10) 0%, rgb(0 0 0 / 33%) 100%)`,
         gray: `linear-gradient(rgb(203 199 210) 0%, rgb(125 122 131 / 76%) 100%)`,
         transparent: `linear-gradient(rgb(203 199 210 / 0%) 0%, rgb(125 122 131 / 0%) 100%)`,
      };

      this.renderer.setStyle(host, 'background', colors[this.customColor!]);

      if (!document.getElementById('GondolaButtonRounded')) {
         const styleEl = this.renderer.createElement('style');

         this.renderer.setAttribute(styleEl, 'id', 'GondolaButtonRounded');

         styleEl.innerHTML = /* css */ `
            .GondolaButtonRounded {
               --size-btn: 30px;
               display: flex;
               justify-content: center;
               align-items: center;
               transition: none !important;
               box-shadow: none !important;
               border: none;
               border-color: transparent;

               border-radius: 99999px;
               background-color: transparent;

               width: var(--size-btn);
               max-width: var(--size-btn);
               height: var(--size-btn);
               max-height: var(--size-btn);
               color: white !important;
            }

            .GondolaButtonRounded
               .p-ripple.p-element.p-button.p-component.p-button-icon-only.p-button-rounded.p-button-outlined {
               border: none;
               height: var(--size-btn) !important;
               max-height: var(--size-btn) !important;
               color: white !important;
            }

            p-button.GondolaButtonRounded.p-disabled {
               filter: grayscale(1);
               background: burlywood !important;
            }

            .p-button.p-button-outlined:enabled:active {
               background: rgb(79 13 199 / 65%) !important;
            }
         `;

         document.head.appendChild(styleEl);
      }
   }
}
