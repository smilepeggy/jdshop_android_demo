import { Component, OnInit } from '@angular/core';
// 請求api
import { CommonService } from '../services/common.service';
// 獲取get傳值
import { ActivatedRoute } from '@angular/router';
// import Storage服務
import { StorageService } from '../services/storage.service';
// import cart服務
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-pcontent',
  templateUrl: './pcontent.page.html',
  styleUrls: ['./pcontent.page.scss'],
})
export class PcontentPage implements OnInit {


  public tab: any = 'list';
  public list: any = {};
  public config: any = {};
  public num: any = 1;
  public cartNum: any = 0;
  // 選中的屬性
  public product_attrs: any = '';
  constructor(public common: CommonService, public activatedRoute: ActivatedRoute, public storage: StorageService, public cartservice: CartService) {
    const array1 = ['a', 'b', 'c'];

    for (const element of array1) {
      console.log(element);
    }
    this.config = this.common.config;
    console.log(this.config);
  }

  ngOnInit() {
    // 獲取購物車數量
    const carlist = this.storage.get('cartlist');
    if (carlist) {
      this.cartNum = this.cartservice.getCartNum(carlist);
    }

    // 獲取get傳值
    this.activatedRoute.queryParams.subscribe((data) => {
      console.log(data); // {id: "59f1e4919bfd8f3bd030eed6"}
      this.getProductData(data.id);
    });
  }

  getProductData(id) {
    const api = 'api/pcontent?id=' + id;
    this.common.ajaxGet(api).then((response: any) => {
      console.log(response);
      this.list = response.result;
      console.log(this.list);
      // Property 'result' does not exist on type 'unknown'.
      // 則改為response: any
    });
  }

  // 點擊什麼就紅匡起來
  // 建議不要用jQuery 比較慢用原生JS就好
  changeAttr(e) {
    console.log(e);
    console.log(e.srcElement);
    console.log(e.srcElement.parentNode);
    console.log(e.srcElement.parentNode.children);
    console.log(e.srcElement.nodeName); // span div

    if (e.srcElement.nodeName === 'SPAN') {

      const el = e.srcElement; // 獲取當前點Span的DOＭ節點

      // 找父親節點
      const parent = el.parentNode;
      // 透過父親找子節點
      const attrchild = parent.children;
      console.log(attrchild.length);

      // 去除其他子節點的active class
      // 寫法一
      // for (let i = 0; i < attrchild.length; i++) {
      //   console.log(attrchild[i]);
      //   attrchild[i].className = '';
      // }
      // 寫法二
      for (const i of attrchild) {
        console.log(i);
        i.className = '';
      }
      el.className = 'active'; // 給當前DOM一個class 再到SCSS設定

    }
  }

  // 增減數量
  incNum() {
    this.num += 1;
  }

  decNum() {
    // 不能減到0
    if (this.num > 1) {
      this.num -= 1;
    }
  }

  // 加入購物車
  addcart() {

    // const product_title = this.list['title'];
    const product_title = this.list.title;
    console.log(product_title);
    console.log(this.list);
    const product_id = this.list._id;
    const product_pic = this.list.pic;
    const product_price = this.list.price;
    const product_count = this.num;  /*商品數量*/
    this.product_attrs = '';


    // ES5 語法
    const spanActive = document.querySelectorAll('#myAttr .active');

    console.log(spanActive);
    // 取屬性值
    // 寫法一
    // for (let i = 0; i < spanActive.length; i++) {
    //   if (i === 0) {
    //     this.product_attrs += spanActive[i].innerHTML;

    //   } else {
    //     this.product_attrs += ' ' + spanActive[i].innerHTML;

    //   }
    //   // this.product_attrs += spanActive[i].innerHTML;
    //   console.log(this.product_attrs); // 185紅色
    //   console.log(spanActive[i].innerHTML); // 185 // 紅色
    // }

    // 寫法二
    for (const i of spanActive) {
      console.log(i);
      if (i == null) { // 一個屬性
        this.product_attrs += i.innerHTML;

      } else { // 多個屬性加空格
        this.product_attrs += ' ' + i.innerHTML;

      }
      // this.product_attrs += i.innerHTML;
      console.log(this.product_attrs); // 185紅色
      console.log(i.innerHTML); // 185 // 紅色
      console.log(i);
    }

    // ES6 語法
    const productJson = {
      product_title,
      product_id,
      product_pic,
      product_price,
      product_count,
      product_attrs: this.product_attrs,
      checked: true
    };
    // console.log(productJson);
    // console.log(spanActive);


    /*
    1、獲取localStorage的cartList數據

      2、判斷cartList是否有數據

          2.1 有數據：

              3、判斷購物車有沒有當前數據：

                      3.1 有當前數據：

                          3.1.1、讓購物車中的當前數據數量 等於以前的數量+現在的數量
                          3.1.2、重新寫入

                      3.2 沒有當前數據：

                          3.2.1、把購物車cartList的數據和當前數據拼接，拼接後重新寫入。

          2.2 沒有數據：

              1、把當前商品數據以及屬性數據放在數組中然後寫入localStorage
     */

    const cartlist = this.storage.get('cartlist'); // 1
    // console.log(cartlist);
    if (cartlist && cartlist.length > 0) { // 2

      // 2.1 判斷cartlist有沒有當前數據
      if (this.cartservice.hasData(cartlist, productJson)) {

        // 3.
        // 寫法一 for
        // for (let i = 0; i < cartlist.length; i++) { // 3.1.1  有數據
        //   if (cartlist[i].product_id === productJson.product_id && cartlist[i].product_attrs === productJson.product_attrs) { // 3.1.2
        //     cartlist[i].product_count += productJson.product_count;
        //   }
        // }
        // 寫法二 for-of
        for (const i of cartlist) { // 3.1.1  有數據
          if (i.product_id === productJson.product_id && i.product_attrs === productJson.product_attrs) { // 3.1.2
            i.product_count += productJson.product_count;
          }
        }

      } else { // 3.2 無數據
        cartlist.push(productJson); // 3.2.1
        // console.log(cartlist);
      }
      this.storage.set('cartlist', cartlist);


      // 2.2 若購物車沒有數據的話直接寫入
    } else {
      const tempArr: any[] = [];
      // console.log(tempArr);
      tempArr.push(productJson);
      this.storage.set('cartlist', tempArr);
      console.log(tempArr);
    }
    // 修改底部數量
    this.cartNum += productJson.product_count;
    // console.log(productJson.product_count);

  }


}
