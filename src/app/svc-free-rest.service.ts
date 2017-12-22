import { Injectable } from '@angular/core';
import { RESTAURANTS } from './mock-restaurants';
import {Restaurant } from './restaurant';
@Injectable()
export class SvcFreeRestService {

  constructor() { }
  getRestaurants():Restaurant[]{
    return RESTAURANTS;
  }

}
