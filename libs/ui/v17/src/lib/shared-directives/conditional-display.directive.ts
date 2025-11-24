import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[conditionalElement]',
  standalone: true,
})
export class ConditionalElementDirective implements OnInit, OnDestroy {
  private observer: MutationObserver | null = null;

  constructor(private readonly el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.addBaseStyles();

    this.checkVisibility();

    this.observer = new MutationObserver(() => {
      this.checkVisibility();
    });

    this.observer.observe(this.el.nativeElement, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private addBaseStyles(): void {
    const element = this.el.nativeElement;

    element.style.marginLeft = '10px';
    element.style.userSelect = 'none';
    element.style.color = '#f44336';
    element.style.fontWeight = '600';
    element.style.fontSize = '10px';
    element.style.transition = 'opacity 0.3s ease-in-out';
    element.style.opacity = '0';
  }

  private checkVisibility(): void {
    const element = this.el.nativeElement;
    const content = element.textContent?.trim() || '';

    const isEmpty =
      content === '' || content === 'null' || content === 'undefined';

    if (isEmpty) {
      element.style.opacity = '0';
      element.style.display = 'none';
    } else {
      element.style.display = '';
      setTimeout(() => {
        element.style.opacity = '1';
      }, 10);
    }
  }
}
