import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[GondolaTableColumn]',
  standalone: true,
})
export class GondolaTableColumnDirective
  implements OnChanges, AfterViewInit, OnDestroy
{
  @Input('GondolaTableColumn') config!: Record<string, boolean>;
  previousConfig!: Record<string, boolean>;

  private observer!: MutationObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnDestroy(): void {
    this.config = getColumnsConfig(this.el);
    this.previousConfig = this.config;

    if (this.observer) {
      this.observer.disconnect();
    }
  }

  ngAfterViewInit(): void {
    this.applyColumnVisibility();

    this.observer = new MutationObserver(() => this.applyColumnVisibility());
    this.observer.observe(this.el.nativeElement, {
      childList: true,
      subtree: true,
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['config']) {
      this.applyColumnVisibility();
    }
  }

  private applyColumnVisibility() {
    if (!this.config) return;

    if (JSON.stringify(this.config) === JSON.stringify(this.previousConfig))
      return;

    this.previousConfig = this.config;

    const table: HTMLElement = this.el.nativeElement;

    Object.entries(this.config).forEach(([key, visible]) => {
      const cells = table.querySelectorAll(`[data-col="${key}"]`);
      cells.forEach((cell: Element) => {
        this.renderer.setStyle(cell, 'display', visible ? '' : 'none');
      });
    });

    window.dispatchEvent(new Event('resize'));
  }
}

function getColumnsConfig(table: ElementRef): Record<string, boolean> {
  const element: HTMLElement = table.nativeElement;
  const cells = element.querySelectorAll('[data-col]');
  const config: Record<string, boolean> = {};

  cells.forEach((cell) => {
    const key = cell.getAttribute('data-col');
    if (key) {
      config[key] = true;
    }
  });

  return config;
}
