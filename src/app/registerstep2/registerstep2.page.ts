import { Component, OnInit } from '@angular/core';
// import JS 跳轉
import { NavController } from '@ionic/angular';
// 請求api
import { CommonService } from '../services/common.service';
// import Storage服務
import { StorageService } from '../services/storage.service';
@Component({
  selector: 'app-registerstep2',
  templateUrl: './registerstep2.page.html',
  styleUrls: ['./registerstep2.page.scss'],
})
export class Registerstep2Page implements OnInit {

  public tel: any = '';
  public num: any = 10;
  public code: any = '';
  public sendCodeBtn = false; // 默認不顯示 
  constructor(public navController: NavController, public common: CommonService, public storage: StorageService) {
    this.tel = this.storage.get('tel');
  }

  ngOnInit() {
    this.doTimer();
  }
  goRegisterStep3() {
    // 驗證驗證碼
    // http://jd.itying.com/api/validateCode
    const api = 'api/validateCode';
    this.common.ajaxPost(api, { "tel": this.tel, "code": this.code }).then((response: any) => {
      console.log(this.code);
      console.log(response);
      if (response.success) {
        this.storage.set('code', this.code);
        this.navController.navigateForward('/registerstep3');
      } else {
        this.storage.set('code', this.code);
        // bug here
        alert('Verification Code is wrong'); 
      }
    });
  }

  doTimer() {
    const timer = setInterval(() => {
      this.num--;
      if (this.num === 0) {
        clearInterval(timer);
        this.sendCodeBtn = true;
      }
    }, 1000);
  }

  sendCode() {
    // alert('sendCode');
    // http://jd.itying.com/api/sendCode
    const api = 'api/sendCode';
    this.common.ajaxPost(api, { 'tel': this.tel }).then((response: any) => {
      console.log(response);
      console.log(this.tel);

      if (response.success) {
        alert('Resend the Verification Code sucessfully');
        this.sendCodeBtn = false;
        this.num = 10;
        this.doTimer();
      } else {
        alert('fall to send Verification Code and ' + response.message);
      }
    });
  }
}
