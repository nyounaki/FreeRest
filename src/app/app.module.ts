import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { SvcFreeRestService } from './svc-free-rest.service';
import { RestaurantsComponent } from './restaurants/restaurants.component';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent
  ],
  imports: [
    BrowserModule,AlertModule.forRoot()
  ],
  providers: [SvcFreeRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
