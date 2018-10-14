import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PizzaListComponent } from '../pizza-list/pizza-list.component';
import { PizzaDetailComponent } from '../pizza-detail/pizza-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/pizzas', pathMatch: 'full'},
  {path: 'pizzas', component: PizzaListComponent},
  {path: 'pizzas/:id', component: PizzaDetailComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule],

  declarations: []
})
export class AppRoutingModule { }
