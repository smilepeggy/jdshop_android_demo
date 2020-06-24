import { Component, OnInit } from '@angular/core';
// 獲取get傳值
import { ActivatedRoute } from '@angular/router';
// import Storage服務
import { StorageService } from '../services/storage.service';
// import services
import { CommonService } from '../services/common.service';
// import JS 跳轉
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-addressedit',
  templateUrl: './addressedit.page.html',
  styleUrls: ['./addressedit.page.scss'],
})
export class AddresseditPage implements OnInit {
  public addressList: any = {}; // 雖然有ngmodel 但可以不用指定name phone
  public userinfo: any = {};

  constructor(public activatedRoute: ActivatedRoute, public storage: StorageService, public common: CommonService, public navController: NavController) { }

  ngOnInit() {

    const userinfo = this.storage.get('userinfo');
    /*沒有login guard時
    // 驗證用戶是否合法
    if (!userinfo || !userinfo.username) { // 用戶沒有登入

    } else { // 用戶有登入
      this.userinfo = userinfo;
    }
    console.log(this.userinfo);
    */

    // 有配置login guard時
    this.userinfo = userinfo;

    this.activatedRoute.queryParams.subscribe((data) => {
      // this.addressList = data; // 錯誤Cannot assign to read only property 'name' of object '[object Object]'
      this.addressList = JSON.parse(JSON.stringify(data)); // 修正
      console.log(this.addressList);
    });
  }
  doEditAddress() {
    console.log(this.addressList);
    const sign = this.common.sign({
      uid: this.userinfo._id,
      name: this.addressList.name,
      id: this.addressList._id,
      phone: this.addressList.phone,
      address: this.addressList.address,
      salt: this.userinfo.salt   // 私鑰
    });

    const api = 'api/editAddress';
    this.common.ajaxPost(api, {

      uid: this.userinfo._id,
      name: this.addressList.name,
      id: this.addressList._id,
      phone: this.addressList.phone,
      address: this.addressList.address,
      sign
    }).then((data: any) => {
      if (data.success) {
        this.navController.back();
      } else {
        alert(data.message);
      }
    });
  }
}
