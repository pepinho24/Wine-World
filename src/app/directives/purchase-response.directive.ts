import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[purchase-response]'
})
export class PurchaseResponseDirective {
    constructor(private el: ElementRef) {
    }

    @HostListener('mousedown') onMouseDown () {
        this.el.nativeElement.innerText = 'WooHoo! We have a winner!';
    }
}
