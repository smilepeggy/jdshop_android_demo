import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  // public payType = 1; // 會有bug無法選中
  public payType = '1';
  constructor() { }

  ngOnInit() {
  }
  dopay() {

    console.log(this.payType);
  }
}
