import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { NgxPayPalModule } from 'ngx-paypal';
import { ApiModule } from './REST';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaListComponent,
    PizzaDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPayPalModule,
    ApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
