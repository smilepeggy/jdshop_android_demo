import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  hasData(cartlist, currentProduct) { // 傳入原本數據cartlist和當前數據

    if (cartlist && cartlist.length > 0) { // cartlist有當前數據

      // 寫法一 for
      // for (let i = 0; i < cartlist.length; i++) {
      //   if (cartlist[i].product_id === currentProduct.product_id && cartlist[i].product_attrs === currentProduct.product_attrs) {
      //     return true;
      //   }
      // }

      // 寫法二 for-of
      for (const i of cartlist) {
        if (i.product_id === currentProduct.product_id && i.product_attrs === currentProduct.product_attrs) {
          return true;
        }
      }
      return false; // cartlist沒有當前選中的商品叔句

    } else { // cartlist沒有當前數據
      return false;

    }
  }

  // 獲取購物車商品數量
  getCartNum(cartlist) {
    let sum = 0;
    for (const i of cartlist) {
      sum += i.product_count;
    }
    return sum;
  }


  // 計算購物車價錢
  getAllprice(cartlist) {
    let allprice = 0;
    if (cartlist && cartlist.length > 0) {
      for (const i of cartlist) {
        // console.log(i);
        if (i.checked) {
          allprice += i.product_count * i.product_price; // 數量x價錢
          // console.log(allprice);
        }
      }
    }
    return allprice;
  }

  // 獲取選中商品的數量
  getCheckedNum(cartlist) {
    let num = 0;
    for (const i of cartlist) {
      // console.log(i);
      if (i.checked) {
        num++;
        console.log(num);
      }
    }
    return num;
  }
}
