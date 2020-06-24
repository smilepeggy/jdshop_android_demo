import { Component, OnInit } from '@angular/core';
// import JS 跳轉
import { NavController } from '@ionic/angular';
// 請求api
import { CommonService } from '../services/common.service';
// import Storage服務
import { StorageService } from '../services/storage.service';
@Component({
  selector: 'app-registerstep1',
  templateUrl: './registerstep1.page.html',
  styleUrls: ['./registerstep1.page.scss'],
})
export class Registerstep1Page implements OnInit {

  public tel: any = '';

  constructor(public navController: NavController, public common: CommonService, public storage: StorageService) { }

  ngOnInit() {
  }
  goRegisterStep2() {
    // 驗證電話號碼是否符合格式
    if (/^\d{11}$/.test(this.tel)) {

      // http://jd.itying.com/api/sendCode
      const api = 'api/sendCode';
      this.common.ajaxPost(api, { 'tel': this.tel }).then((response: any) => {
        console.log(response);
        console.log(this.tel);

        if (response.success) {
          this.navController.navigateForward('/registerstep2');
          this.storage.set('tel', this.tel);
        } else {
          alert('fall to send Verification and ' + response.message);
        }
      });
    } else {
      alert('Phone nummber format error');
    }

  }
}
