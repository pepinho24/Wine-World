import { Component, Input } from '@angular/core';
import { Wine } from '../../models/wine';

@Component({
    selector: 'wine-list-small',
    templateUrl: './wine-list-small.component.html',
    styleUrls: ['./wine-list-small.component.css']
})
export class WineListSmallComponent {
    @Input() wine: Wine[];
    @Input() title: string;
}
