import { Component, OnInit } from '@angular/core';
// import Storage服務
import { StorageService } from '../services/storage.service';
// import eventemitter3 服務
import { EventService } from '../services/event.service';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  public userinfo: any = {};

  constructor(public storage: StorageService, public eventService: EventService) {
    console.log('constructor');
    const userinfo = this.storage.get('userinfo');
    console.log(userinfo);
    if (userinfo && userinfo.username) {
      this.userinfo = userinfo;
      console.log(this.userinfo);
    } else {
      this.userinfo = '';
      console.log(this.userinfo);
    }

  }

  ngOnInit() {
    console.log('ngOnInit');
    // 測試監聽登入成功事件
    /*
    this.eventService.event.on('msg', () => {
      console.log('msg');
    });
    this.eventService.event.on('haha', () => {
      console.log('haha');
    });
    */
    this.eventService.event.on('useraction', () => {

      const userinfo = this.storage.get('userinfo');
      if (userinfo && userinfo.username) {
        this.userinfo = userinfo;
        console.log(this.userinfo);
      } else {
        this.userinfo = '';
        console.log(this.userinfo);
      }
      
    });
  }

  doMessage() {
    this.eventService.event.emit('msg');
  }


  /* ionic4 內置生命週期函數
    ionViewWillEnter() { // 進入/跳轉頁面時觸發
      console.log('ionViewwillEnter');
    }
    ionViewDidEnter() { //進入後觸發
      console.log('ionViewDidEnter');
    }
  */

  // 想要登入Loing頁面登入成功後 tab4 馬上顯示用戶訊息
  // npm install --save eventemitter3
  // 可以參考nodejs課程

}
