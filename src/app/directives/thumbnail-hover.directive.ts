import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[thumbnail-hover]'
})
export class ThumbnailHoverDirective {
    prevValues: any;
    nativeEl: any;

    constructor(el: ElementRef) {
        this.nativeEl = el.nativeElement;
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.prevValues = {
            borderColor: this.nativeEl.style.borderColor,
            backgroundColor: this.nativeEl.style.backgroundColor
        };
        this.nativeEl.style.borderColor = 'peachpuff';
        this.nativeEl.style.backgroundColor = 'beige';
    }

   @HostListener('mouseleave') onMouseLeave() {
        this.nativeEl.style.borderColor = this.prevValues.borderColor;
        this.nativeEl.style.backgroundColor = this.prevValues.backgroundColor;
    }
}
