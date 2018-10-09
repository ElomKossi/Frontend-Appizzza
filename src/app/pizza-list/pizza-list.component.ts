import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  //pizzaParent: Array<Pizza> = [
  //  {name: "royale", price: 11, url: "https://media.istockphoto.com/photos/pizza-with-ham-and-mushrooms-picture-id472171247"},
  //  {name: "marguerite", price: 12, url: "https://media.istockphoto.com/photos/pizza-on-white-background-picture-id635675852"},
  //  {name: "reine", price: 10, url: "https://thumbs.dreamstime.com/z/pizza-16727090.jpg"},
  //]
  
  pizzaParent: Array<Pizza> = []

  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.pizzaService.listPizza().subscribe( pizzas => this.pizzaParent = pizzas)
}

}
