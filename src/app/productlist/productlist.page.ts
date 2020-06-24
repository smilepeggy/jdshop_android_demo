import { Component, OnInit, ViewChild } from '@angular/core';
// import JS 跳轉
import { NavController, IonContent } from '@ionic/angular';
// 請求api
import { CommonService } from '../services/common.service';
// 獲取get傳值
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.page.html',
  styleUrls: ['./productlist.page.scss'],
})
export class ProductlistPage implements OnInit {

  @ViewChild(IonContent, { static: true }) content: IonContent; // 回到頂部 (但沒有用這個好像也會回到頂部)

  public productlist = [];
  public cid: any; // 分類的id 例如 cid=59f1e4919bfd8f3bd030eed6
  public config: any = {}; // 配置CommonService
  public page: any = 1; // 一開始加載第一頁
  public subHeaderList: any[] = [];
  public subHeadSelected: any = 1; // 選中的id
  public sort: any = ''; // 排序
  public hasInfiniteData: any = true; // 開關上拉分頁 開
  constructor(public navController: NavController, public common: CommonService, public activatedRoute: ActivatedRoute) {
    this.config = this.common.config;
    this.subHeaderList = [
      {
        id: 1,
        title: 'All',
        fileds: 'all',
        sort: -1  // 降序
      },
      {
        id: 2,
        title: 'Sale Count',
        fileds: 'salecount',
        sort: -1
      },
      {
        id: 3,
        title: 'Price',
        fileds: 'price',
        sort: -1
      }
    ];
  }


  ngOnInit() {
    // 獲取get傳值
    this.activatedRoute.queryParams.subscribe((data) => {
      console.log(data); // {cid: "59f1e4919bfd8f3bd030eed6"}
      this.cid = data.cid;
      console.log(this.cid);
    });
    this.getProductlsit(null); // Expected 1 arguments, but got 0. 一開始傳入null
  }

  getProductlsit(event) {
    // 排序
    if (this.sort) { // 有傳入值this.sort時排序
      // http://jd.itying.com/api/plist
      // productlist?cid=59f1e4919bfd8f3bd030eed6
      var api = 'api/plist?cid=' + this.cid + '&page=' + this.page + '&sort=' + this.sort;
    } else { // 不排序
      var api = 'api/plist?cid=' + this.cid + '&page=' + this.page;
    }

    this.common.ajaxGet(api).then((response: any) => {
      console.log(response); // {result: Array(10)}
      // this.productlist = response.result;
      this.productlist = this.productlist.concat(response.result); // 拼接前幾頁結果
      console.log(this.productlist); // (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
      console.log(this.page); // 1
      this.page++;
      console.log(this.page); // 2
      event ? event.target.complete() : ''; // 調用方法 event 不存在的話執行'', 因為一開始加載null
      // event.target.complete(); // TypeError: Cannot read property 'target' of null 解法為上面
      console.log(event); // null // CustomEvent

      // 判斷是否有數據 後停止加載 (返回數據<10 代表下一頁沒數據)
      if (response.result.length < 10) {
        /* // 不好的上拉分頁禁用法 用this.hasInfiniteData = false; 比較好
        event ? event.target.disabled = true : ''; // event 存在才=true 否則=''
        // event.target.disabled = true; //TypeError: Cannot read property 'target' of null 加載’女裝內衣‘只有一條數據<10 這樣會報錯 解法為上面
      */
        this.hasInfiniteData = false; // 關掉上拉分頁

      }
    });
  }

  goBack() {
    this.navController.navigateBack('/tabs/tab2');
  }

  subHeaderChange(id) { // 接收id , 點擊price時把price的id傳過來
    this.subHeadSelected = id;
    this.sort = this.subHeaderList[id - 1].fileds + '_' + this.subHeaderList[id - 1].sort;
    // 因為id從1開始所以要[id-1] 0: {id: 1, title: "All", fileds: "all", sort: -1}
    console.log(this.sort); // price_-1
    console.log(this.subHeaderList); // 0: {id: 1, title: "All", fileds: "all", sort: -1}
    this.page = 1; // 重置page數據
    this.productlist = []; // 重置商品數據
    this.hasInfiniteData = true; // 開啟上拉分頁
    /*
    錯誤示範
    // this.sort = this.sort * -1;
    // console.log(this.sort);
    */
    // 改變排序
    this.subHeaderList[id - 1].sort = this.subHeaderList[id - 1].sort * -1;
    console.log(this.subHeaderList[id - 1].sort); // 1
    this.content.scrollToTop(0); // 回到頂部
    this.getProductlsit(null); // 請求數據
  }

}
