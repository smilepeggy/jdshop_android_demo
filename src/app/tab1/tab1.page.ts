import { Component, ViewChild } from '@angular/core';
// import JS 跳轉
import { NavController } from '@ionic/angular';
// import services
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild('slide', { static: true }) slide;

  public slideOpts = {
    speed: 400,
    autoplay: {
      delay: 2000
    },
    loop: true,
  };
  // 輪播圖列表
  public focuslist: any[] = [];
  // 配置文件 已知config為object{}
  public config: any = {};

  public listSlides: any[] = [];
  // hot List
  public hotlist: any[] = [];
  public hotlistwidth: any = 100;
  // product list
  public plist: any[] = [];

  // 構造函數constructor 只做初始化的操作
  constructor(public navController: NavController, public common: CommonService) {
    // 從services 裡面拿取config
    this.config = this.common.config;
    console.log(this.config); // {domain: "http://jd.itying.com/"}
  }

  // 初始化的生命週期函數ngOnInit
  ngOnInit(): void {
    this.getFocusData();
    this.getHotData();
    this.getProductlist();
  }
  // 手動之後繼續自動播放
  SlideTouchEnd() {
    this.slide.startAutoplay();
  }
  // js 跳轉頁面
  goSearch() {
    this.navController.navigateForward('search');
  }
  // 獲取輪播圖數據
  getFocusData() {
    // 完整地址為 http://jd.itying.com/api/focus
    const api = 'api/focus';
    this.common.ajaxGet(api).then((response: any) => {
      console.log(response);
      this.focuslist = response.result; // Property 'result' does not exist on type 'unknown'.需要respnse加上any類型
      console.log(this.focuslist); // (4)....
    });
  }

  // 獲取熱門商品
  getHotData() {
    // 完整地址為 http://jd.itying.com/api/plist?is_hot=1
    const api = 'api/plist?is_hot=1';
    this.common.ajaxGet(api).then((response: any) => {
      console.log(response);
      this.hotlist = response.result; // Property 'result' does not exist on type 'unknown'.需要respnse加上any類型
      console.log(this.hotlist); // (10)....
      // 計算 hotlist width因為不知道後台有多少數據
      this.hotlistwidth = this.hotlist.length * 9 + 'rem';
    });
  }

  // 獲取商品列表
  getProductlist() {
    // 完整地址為 http://jd.itying.com/api/plist?is_best=1
    const api = 'api/plist?is_best=1';
    this.common.ajaxGet(api).then((response: any) => {
      console.log(response);
      this.plist = response.result; // Property 'result' does not exist on type 'unknown'.需要respnse加上any類型
      console.log(this.plist); // (10)....
    });
  }

}

