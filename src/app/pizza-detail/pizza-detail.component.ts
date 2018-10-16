import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})
export class PizzaDetailComponent implements OnInit {

  pizza: Pizza;

  constructor( 
    private Route: ActivatedRoute,
    private pizzaService: PizzaService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPizza()
  }

  getPizza(): void {
    const idUrl = +this.Route.snapshot.paramMap.get('id');
    this.pizzaService.getPizza(idUrl)
        .subscribe(pizza => this.pizza = pizza);
  }

  goBack(): void {
    this.location.back();
  }

}
