import { Component, OnInit } from '@angular/core';
// import JS 跳轉
import { NavController } from '@ionic/angular';
// 請求api
import { CommonService } from '../services/common.service';
// import Storage服務
import { StorageService } from '../services/storage.service';
// import eventemitter3 服務
import { EventService } from '../services/event.service';
@Component({
  selector: 'app-registerstep3',
  templateUrl: './registerstep3.page.html',
  styleUrls: ['./registerstep3.page.scss'],
})
export class Registerstep3Page implements OnInit {
  public tel: any = '';
  public code: any = '';
  public password: any = '';
  public repassword: any = '';

  constructor(public navController: NavController, public common: CommonService, public storage: StorageService, public eventService: EventService) {
    this.tel = this.storage.get('tel');
    this.code = this.storage.get('code');
  }

  ngOnInit() {
  }
  doRegister() {
    console.log(this.tel);
    console.log(this.code);
    console.log(this.password);
    console.log(this.repassword);
    // 驗證密碼是否相同 記得server也要驗證
    if (this.password !== this.repassword) {
      alert('Confirm password is worng');
    } else if (this.password.length < 6) {
      alert('Password should more then 6 letters');
    } else {

      const api = 'api/register';
      const postjson = {
        tel: this.tel,
        code: this.code,
        password: this.password
      };

      this.common.ajaxPost(api, postjson).then((response: any) => {
        console.log(response);

        if (response.success) {
          this.storage.set('userinfo', response.userinfo[0]);
          // 廣播tab4來更新用戶登入訊息
          this.eventService.event.emit('useraction');
          this.navController.navigateForward('/tabs/tab4');
        } else {
          alert('Fail to register');
        }
      });

    }
  }




}
