import { Component, OnInit } from '@angular/core';
// 獲取get傳值
import { ActivatedRoute } from '@angular/router';
// import JS 跳轉
import { NavController } from '@ionic/angular';
// import Storage服務
import { StorageService } from '../services/storage.service';
// import services
import { CommonService } from '../services/common.service';
// import cart服務
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  public returnUrl = '';
  public userinfo: any = {};
  public productList: any[] = []; // 數組array
  public config: any = {};
  public addressList: any = {};
  public allPrice = 0;

  constructor(public activatedRoute: ActivatedRoute, public navController: NavController, public storage: StorageService, public common: CommonService, public cartservice: CartService) {
    this.config = this.common.config;
  }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe((data: any) => {
      console.log(data); // {returnUrl: "tabs/tab3"} 知道從tab3轉的

      // // 寫法一
      // if (data.returnUrl) {
      //   this.returnUrl = data.returnUrl;
      //   console.log('data.returnUrl');
      // } else {
      //   this.returnUrl = '/tabs/tab3';
      // }

      // 寫法二
      data.returnUrl ? this.returnUrl = data.returnUrl : this.returnUrl = '/tabs/tab3';
    });
  }

  ionViewDidEnter() {

    // 獲取用户信息
    const userinfo = this.storage.get('userinfo');
    if (userinfo && userinfo.username) {
      this.userinfo = userinfo;
      console.log(this.userinfo);
      this.getDefaultAddress(); // 登入後獲取默認地址
    } else {
      this.userinfo = '';
      console.log(this.userinfo);
    }
    // 獲取去结算的商品
    this.productList = this.storage.get('checkoutData');
    console.log(this.productList);

    // 計算總價
    this.allPrice = this.cartservice.getAllprice(this.productList);
  }

  goBack() {
    this.navController.navigateBack(this.returnUrl);
  }
  // 獲取默認地址
  getDefaultAddress() {
    const sign = this.common.sign({
      uid: this.userinfo._id,
      salt: this.userinfo.salt
    });
    console.log(sign);

    const api = 'api/oneAddressList?uid=' + this.userinfo._id + '&sign=' + sign;
    this.common.ajaxGet(api).then((data: any) => {
      console.log(data);

      if (data.success) {
        this.addressList = data.result[0];
        console.log(this.addressList);
      } else {
        alert(data.message);
      }
    });
  }


  // 提交訂單
  doOrder() {
    // 獲取用户信息
    // 獲取用户的收貨地址
    // 獲取商品信息

    if (!this.userinfo) { // 用戶沒有登入
      this.navController.navigateForward(['/login'], {
        queryParams: {
          returnUrl: '/checkout'
          // http://localhost:8100/login?returnUrl=%2Fcheckout
        }
      });
    } else if (!this.addressList) { // 有登入但沒有收貨地址
      alert('Please choose your Address');
    } else {
      // 需要獲取信息
      const address: any = this.addressList.address;
      const phone: any = this.addressList.phone;
      const name: any = this.addressList.name;
      const all_price = this.allPrice;
      const products: any = JSON.stringify(this.productList); // array無法直接傳到服務器 需stringify
      // console.log(this.productList);
      // console.log(products);

      // 簽名的字段
      const json = {
        uid: this.userinfo._id,
        salt: this.userinfo.salt,
        address,
        phone,
        name,
        products,
        all_price
      };
      const sign = this.common.sign(json);
      // console.log(json);
      // console.log(sign); // cedf1fa46b60874d16df6f63352c1ded

      // 請求數據
      const api = 'api/doOrder';
      this.common.ajaxPost(api, {
        uid: this.userinfo._id,
        salt: this.userinfo.salt,
        address,
        phone,
        name,
        all_price,
        sign, // 簽名
        products
      }).then((response: any) => {
        console.log(response);

        // 需要删除購物車選中商品
        this.removeCartSelected();

        if (response.success) {

          // 可以透過queryParams或者localstorage傳order_id
          this.navController.navigateForward(['/payment'], {
            queryParams: {
              order_id: response.result.order_id // 不太懂用意
            }
          });
        } else {
          alert(response.message);
        }
      });
    }

  }


  // 刪除已選中要去結算的商品
  removeCartSelected() {
    const noCheckedCartlist = [];
    const cartList = this.storage.get('cartlist');
    console.log(cartList);
    for (const i of cartList) {
      if (!i.checked) { // 把沒有選中的重新存=刪掉選中的
        noCheckedCartlist.push(i);
        console.log(noCheckedCartlist);
      }
    }
    this.storage.set('cartlist', noCheckedCartlist);
  };

}
