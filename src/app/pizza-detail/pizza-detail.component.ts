import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';
import { Location } from '@angular/common';
import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})
export class PizzaDetailComponent implements OnInit {

  pizza: Pizza;
  public payPalConfig?: PayPalConfig;

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
    this.initConfig();
  }

  goBack(): void {
    this.location.back();
  }

  private initConfig(): void {
    this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
      commit: true,
      client: {
        sandbox: 'AbWL0qtxw0Hc2TbagdWKqW_nWClU9O4Ps9QBb7alpf3--OPO4SXsHGlk1vBG4l6sxDM9Q3tKNxfWIdVP'
      },
      button: {
        label: 'paypal',
      },
      onPaymentComplete: (data, actions) => {
        console.log('OnPaymentComplete');
      },
      onCancel: (data, actions) => {
        console.log('OnCancel');
      },
      onError: (err) => {
        console.log('OnError');
      },
      transactions: [{
        amount: {
          currency: 'EUR',
          total: 9
        }
      }]
    });
  }

}
