import { Component } from '@angular/core';
import { slideInAnimation } from '../assets/route-animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  title = 'fostering-client';
}
