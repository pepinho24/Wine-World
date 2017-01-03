import { Component } from '@angular/core';
import { routerTransition } from '../core/router.animations';

@Component({
  selector: 'notfound',
  templateUrl: './notfound.component.html',
  animations: [routerTransition()],
  styleUrls: ['./notfound.component.css'],
  host: {'[@routerTransition]': ''}
})
export class NotFoundComponent { }