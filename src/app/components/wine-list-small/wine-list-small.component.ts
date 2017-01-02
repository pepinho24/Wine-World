import { Component, Input } from '@angular/core';
import { Wine } from '../../models/wine';

@Component({
    selector: 'wine-list-small',
    templateUrl: './wine-list-small.component.html'
})

export class WineListSmallComponent {
    @Input() wine: Wine[];
}
