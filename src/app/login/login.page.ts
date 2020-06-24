import { Component, OnInit } from '@angular/core';
// import JS 跳轉
import { NavController } from '@ionic/angular';
// 請求api
import { CommonService } from '../services/common.service';
// import Storage服務
import { StorageService } from '../services/storage.service';
// import eventemitter3 服務
import { EventService } from '../services/event.service';
// 獲取get傳值
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public userinfo: any = {
    username: '',
    password: ''
  };
  public returnUrl: any = '';

  constructor(public navController: NavController, public common: CommonService, public storage: StorageService, public eventService: EventService, public activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((data: any) => {
      console.log(data); // {returnUrl: "/checkout"}
      data.returnUrl ? this.returnUrl = data.returnUrl : this.returnUrl = '/tabs/tab4';
      console.log(this.returnUrl); // checkout
    })
  }
  goBack() {
    // 從哪跳轉回到哪裡
    this.navController.navigateBack(this.returnUrl);
  }

  doLogin() {
    console.log(this.userinfo);

    if (this.userinfo.username === '') {
      alert('Please enter your username');
    } else if (this.userinfo.password.length < 6) {
      alert('Password is wrong');
    }

    const api = 'api/doLogin';
    this.common.ajaxPost(api, this.userinfo).then((response: any) => {
      console.log(response);
      if (response.success) { // 保存用戶訊息, 跳轉頁面
        this.storage.set('userinfo', response.userinfo[0]); // 保存object
        this.navController.navigateRoot('/tabs/tab4');

        // 廣播tab4來更新用戶登入訊息
        this.eventService.event.emit('useraction');
      } else { // 登入失敗
        // alert(response.message);
        alert('Fail to Login');
      }

    });
  }
}
