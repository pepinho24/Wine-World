import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
    email: string;

    subscribeToNewsletter() {
        // TODO: validate email properly and send data to server
        if (this.email && this.email.match(/.+@[a-z]+\.[a-z]+/)) {
            window.alert(`Email ${this.email} has joined the party.\nThank you for subscribing to our wine newsletter!`);
        }
    }
}
