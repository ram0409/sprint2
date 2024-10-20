import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  API = 'http://localhost:8080/orders';

  constructor(private http: HttpClient) {}

  public registerOrder(orderData: any) {
    return this.http.post(`${this.API}`, orderData);
  }

  public getOrders() {
    return this.http.get(`${this.API}`);
  }

  public deleteOrder(orderId: any) {
    return this.http.delete(`${this.API}/${orderId}`);
  }

  public updateOrder(order: any) {
    return this.http.put(`${this.API}/${order.orderId}`, order);
  }
}
