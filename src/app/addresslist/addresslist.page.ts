import { Component, OnInit } from '@angular/core';
// import Storage服務
import { StorageService } from '../services/storage.service';
// import services
import { CommonService } from '../services/common.service';
// import JS 跳轉
import { NavController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-addresslist',
  templateUrl: './addresslist.page.html',
  styleUrls: ['./addresslist.page.scss'],
})
export class AddresslistPage implements OnInit {

  public userinfo: any = {};
  public list: any = [];
  constructor(public storage: StorageService, public common: CommonService, public navController: NavController, public alertController: AlertController) {
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

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.getAddressList();
  }

  getAddressList() {
    // 簽名
    const sign = this.common.sign({
      uid: this.userinfo._id,
      salt: this.userinfo.salt
    });

    const api = 'api/addressList?uid=' + this.userinfo._id + '&sign=' + sign;
    this.common.ajaxGet(api).then((data: any) => {
      console.log(data);
      this.list = data.result;
      // console.log(this.list);
    });
  }

  // 改變默認地址
  changeDefaultAddress(address_id) {
    // 簽名
    const sign = this.common.sign({
      uid: this.userinfo._id,
      id: address_id,
      salt: this.userinfo.salt
    });
    console.log(sign);

    const api = 'api/changeDefaultAddress';
    this.common.ajaxPost(api, {
      uid: this.userinfo._id,
      id: address_id,
      sign
    }).then((data: any) => {
      // console.log(data);
      if (data.success) {
        this.navController.navigateBack('/checkout');
      } else {
        alert(data.message);
      }
    });

  }

  // 刪除地址視窗
  async removeAddress(key, address_id) {
    console.log(key, address_id);
    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'Confirm!',
      message: 'Confirm to <strong>Cancel</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            // console.log(blah);
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay' + key); // Confirm Okay1
            this.doRemoveAddress(key, address_id);
          }
        }
      ]
    });

    await alert.present();
  }

  // 請求api來刪除地址
  doRemoveAddress(key, address_id) {

    const sign = this.common.sign({
      uid: this.userinfo._id,
      salt: this.userinfo.salt,
      id: address_id
    });
    console.log(sign);

    const api = 'api/deleteAddress';
    this.common.ajaxPost(api, {
      uid: this.userinfo._id,
      sign,
      id: address_id
    }).then((data: any) => {
      // console.log(data);
      if (data.success) {
        this.list.splice(key, 1);
      } else {
        alert(data.message);
      }
    });
  }


}
