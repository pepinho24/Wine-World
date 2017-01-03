import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverArticle]'
})
export class HoverArticleDirective {

  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('lightgreen', 'lightskyblue 0px 0px 20px 10px');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null, null);
  }

  private highlight(color: string, boxShadow: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style['box-shadow'] = boxShadow;
  }
}
