import { Component, OnInit } from '@angular/core';
// import Storage服務
import { StorageService } from '../services/storage.service';
// import services
import { CommonService } from '../services/common.service';
// import JS 跳轉
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-addressadd',
  templateUrl: './addressadd.page.html',
  styleUrls: ['./addressadd.page.scss'],
})
export class AddressaddPage implements OnInit {
  public addressList: any = {
    name: '',
    phone: '',
    address: ''
  };
  public userinfo: any = {};
  constructor(public storage: StorageService, public common: CommonService, public navController: NavController) { }

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

  }


  doAddAddress() {
    // 先簡單演示，需要判斷是否訊息合法

    if (!this.addressList.name || !this.addressList.phone || !this.addressList.address) {
      alert('Fail to add');
    } else {

      // 生成簽名 放入所有資訊
      const sign = this.common.sign({
        uid: this.userinfo._id,
        // sign: '', // 沒有加這個會非法請求
        name: this.addressList.name,
        phone: this.addressList.phone,
        address: this.addressList.address,
        salt: this.userinfo.salt // 私鑰
      });
      console.log(sign); // 127bf2ed8184b310a7ea34de79587320

      const addjson = {
        uid: this.userinfo._id,
        // sign: sign, // 沒有加這個會非法請求
        sign, // 127bf2ed8184b310a7ea34de79587320
        name: this.addressList.name,
        phone: this.addressList.phone,
        address: this.addressList.address
      };
      console.log(addjson);

      // this.common.sign(addjson);

      const api = 'api/addAddress';
      this.common.ajaxPost(api, addjson).then((data: any) => {
        console.log(data);
        if (data.success) { // Property'success' does not exist on type 'unknown' 解法data:any
          this.navController.back();
        } else {
          alert(data.message);
        }
      });
    }
  }
}
