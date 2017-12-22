import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { SvcFreeRestService } from './svc-free-rest.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,AlertModule.forRoot()
  ],
  providers: [SvcFreeRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
