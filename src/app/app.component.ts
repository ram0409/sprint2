import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderService } from './order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'order-module';

  constructor(private orderService: OrderService) {
    this.getOrderDetails();
  }

  register(registerForm: NgForm) {
    this.orderService.registerOrder(registerForm.value).subscribe(
      (resp: any) => {
        console.log(resp);
        registerForm.reset();
        this.getOrderDetails();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  getOrderDetails() {
    this.orderService.getOrders().subscribe(
      (resp) => {
        console.log(resp);
        this.orderDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  orderDetails = null as any;

  deleteOrder(order: any) {
    this.orderService.deleteOrder(order.orderId).subscribe(
      (resp) => {
        console.log(resp);
        this.getOrderDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  orderToUpdate = {
    orderId: "",
    customerName: "",
    product: "",
    quantity: ""
  };

  edit(order: any) {
    this.orderToUpdate = order;
  }

  updateOrder() {
    this.orderService.updateOrder(this.orderToUpdate).subscribe(
      (resp) => {
        console.log(resp);
        this.getOrderDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
