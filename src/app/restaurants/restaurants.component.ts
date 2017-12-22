import { Component, OnInit } from '@angular/core';
import { SvcFreeRestService} from '../svc-free-rest.service';
import {Restaurant} from '../restaurant';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  constructor(private svcFreeRestService: SvcFreeRestService) { }
  selectedRestaurant:Restaurant;
  restaurants:Restaurant[];
  getRestaurants(): void {
    this.restaurants = this.svcFreeRestService.getRestaurants();
  }
  ngOnInit() {
    this.getRestaurants();
  }
  openDetails(item:Restaurant):void {
    this.selectedRestaurant= item;
    

  }

}
