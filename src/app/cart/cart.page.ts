import { Component } from '@angular/core';
// import Storage服務
import { StorageService } from '../services/storage.service';
// import services
import { CommonService } from '../services/common.service';
// import cart服務
import { CartService } from '../services/cart.service';
// import JS 跳轉
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage  {


  public list: any = [];
  public config: any = {};
  public allprice: any = 0;
  public isCheckedAll: any = true;
  public isEdit = false; // 顯示"Edit"
  public hasData = false; // 判斷購物車是否有數據
  constructor(public storage: StorageService, public common: CommonService, public cartservice: CartService, public navController: NavController) {
    this.config = this.common.config;
    // console.log(this.config); // domain: "http://jd.itying.com/"
  }

  // 監聽checkbox事件
  checkboxChange() {
    this.allprice = this.cartservice.getAllprice(this.list);
    this.isCheckAllFn();
  }


  // 不用ngOninit 是因為，進入頁面只會觸發一次而已
  ionViewDidEnter() { // 進入頁面時觸發
    this.getCartData();
    this.isCheckAllFn();
  }

  getCartData() {
    const cartList = this.storage.get('cartlist');
    // console.log(cartList);
    if (cartList && cartList.length > 0) {
      // 一定要加cartList.length > 0 要不然length: 0還是會視cartList存在
      this.list = cartList;
      this.hasData = true;
      // console.log(this.hasData);
      // console.log(this.list);

    } else {
      this.list = [];
      this.hasData = false;
      // console.log(this.hasData);

    }

    this.allprice = this.cartservice.getAllprice(this.list);
    // console.log(this.allprice);
  }



  // 減少數量
  decCount(item: any) {
    if (item.product_count > 1) {
      item.product_count--;
    }
    this.allprice = this.cartservice.getAllprice(this.list);

  }
  // 增加數量
  incCount(item: any) {
    // console.log(item);
    item.product_count++;
    this.allprice = this.cartservice.getAllprice(this.list);
  }

  // 點擊單項商品判斷是否全選
  isCheckAllFn() {
    console.log('checked');
    if (this.cartservice.getCheckedNum(this.list) === this.list.length) {
      // console.log(this.list.length);
      this.isCheckedAll = true; // 全選
      // console.log(this.isCheckedAll);
    } else {
      this.isCheckedAll = false; // 全不選
      // console.log(this.isCheckedAll);
    }
  }

  // 全選反選(按一下)
  checkAll() {
    // console.log('checkall');
    if (this.isCheckedAll) { // 全選時
      for (const i of this.list) {
        i.checked = false;
        // console.log(i.checked);
      }
      this.isCheckedAll = false;
      console.log(this.isCheckedAll);
    } else { // 沒有全選時
      for (const i of this.list) {
        i.checked = true;
        // console.log(i.checked);
      }
      this.isCheckedAll = true;
      console.log(this.isCheckedAll);
    }
  }


  // 頁面跳轉時，保存購物車數據
  ionViewWillLeave() {
    this.storage.set('cartlist', this.list);
    // console.log(this.list);
  }

  // 刪除購物車選中的商品
  // 邏輯：讀取到未選中要刪除的商品後保存
  doDelete() {
    const noCheckedCartlist = [];

    for (const i of this.list) {
      if (!i.checked) {
        noCheckedCartlist.push(i);
        console.log(noCheckedCartlist);
      }
    }
    this.list = noCheckedCartlist;
    // 三元運算符號？ truthy (length>0)執行冒號前面, falsy (!length>0)執行冒號後面
    this.list.length > 0 ? this.hasData = true : this.hasData = false;
    this.storage.set('cartlist', this.list);
    console.log(this.hasData);
  }

  // 去結算已選中的商品
  doCheckout() {

    const tempArr = [];
    for (const i of this.list) {
      if (i.checked) {
        tempArr.push(i);
      }
    }

    if (tempArr.length > 0) {
      this.storage.set('checkoutData', tempArr);

      // 利用JS跳轉
      // 錯誤寫法:無法判斷是從tab3還是cart頁面跳轉的
      // this.navController.navigateForward('/checkout');
      // 解法：跳轉時要進行傳值get傳值，寫法跟routelink很像
      this.navController.navigateForward(['/checkout'], {
        queryParams: {
          returnUrl: 'cart' // http://localhost:8100/checkout?returnUrl=cart
        }
      });

    } else {
      alert('You have no items yet');
    }
  }

}
