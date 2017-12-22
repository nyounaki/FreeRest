import { Component } from '@angular/core';
import { SvcFreeRestService} from '../app/svc-free-rest.service';
import {Restaurant} from '../app/restaurant';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  restaurant:Restaurant;
}
