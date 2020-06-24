import { Component, OnInit } from '@angular/core';
// import JS 跳轉 // import alert 彈跳視窗
import { NavController, AlertController } from '@ionic/angular';
import { CommonService } from '../services/common.service';

// import Storage服務
import { StorageService } from '../services/storage.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public flag = true;
  public productlist = [];
  public keywords: any = '';
  public page: any = 1;
  public subHeaderList: any[] = [];
  public subHeadSelected: any = 1; // 選中的id
  public sort: any = ''; // 排序
  public config: any = {}; // 配置CommonService
  public hasInfiniteData: any = true;
  public historyList: any[] = [];
  constructor(public navController: NavController, public common: CommonService, public storage: StorageService,
    public alertController: AlertController) {
    // for (let i = 1; i <= 9; i++) {
    //   this.productlist.push({
    //     pic: 'assets/' + i + '.jpg',
    //     title: 'I am a title  I am a title I am a title I am a title  I am a title I am a title' + i,
    //     price: i * 22,
    //   });
    // }
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
    console.log(this.historyList); // []
    console.log(this.historyList.length); // 0
    this.getHistory();
  }
  goBack() {
    this.navController.back();
  }
  // 點History進行search
  goSearch(item) {
    console.log(item); // 點“手” 手
    console.log(this.keywords); // ''
    this.keywords = item;
    console.log(this.keywords); // 手
    this.doSearch();

  }
  doSearch() {
    this.saveHistory();
    this.flag = false;
    // alert(this.keywords);
    this.page = 1; // 換keywords時從page1加載
    this.subHeadSelected = 1;
    this.hasInfiniteData = true; // 開啟上拉分頁
    var api = 'api/plist?search=' + this.keywords + '&page=' + this.page;
    console.log(api); // api/plist?search=手&page=1
    this.common.ajaxGet(api).then((response: any) => {
      console.log(response); // {result: Array(10)}
      this.productlist = response.result;
      console.log(this.productlist); // (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
      console.log(this.page); // 1
      this.page++;
      console.log(this.page); // 2
    });
  }

  // 上拉分頁
  getProductlsit(event) {
    if (this.sort) {
      var api = 'api/plist?search=' + this.keywords + '&page=' + this.page + '&sort=' + this.sort;
      console.log(api);
    } else {
      var api = 'api/plist?search=' + this.keywords + '&page=' + this.page;
      console.log(api); // api/plist?search=手&page=2
    }
    this.common.ajaxGet(api).then((response: any) => {
      console.log(response); // {result: Array(10)}
      // this.productlist = response.result;
      this.productlist = this.productlist.concat(response.result); // 拼接前幾頁結果
      console.log(this.productlist); // (19) [{…}, {…}, {…}, .....]
      console.log(this.page); // 2
      this.page++;
      console.log(this.page); // 3
      event ? event.target.complete() : ''; // 調用方法 event 不存在的話執行'', 因為一開始加載null
      // event.target.complete(); // TypeError: Cannot read property 'target' of null 解法為上面

      // 判斷是否有數據 後停止加載 (返回數據<10 代表下一頁沒數據)
      if (response.result.length < 10) {
        this.hasInfiniteData = false;
      }
    });
  }
  subHeaderChange(id) { // 接收id , 點擊price時把price的id傳過來
    this.subHeadSelected = id; // 選中顏色
    this.sort = this.subHeaderList[id - 1].fileds + '_' + this.subHeaderList[id - 1].sort;
    // 因為id從1開始所以要[id-1] 0: {id: 1, title: "All", fileds: "all", sort: -1}
    console.log(this.sort); // price_-1
    console.log(this.subHeaderList); // (3) [{…}, {…}, {…}] 為 0: {id: 1, title: "All", fileds: "all", sort: -1}
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
    this.getProductlsit(null); // 請求數據
  }

  // 保存歷史紀錄
  saveHistory() {
    var historylist = this.storage.get('historyList');
    console.log(historylist); // null // (3) ["手", "D", "2"]
    console.log(this.historyList); // []
    // console.log(historyList.length); // Cannot read property 'length' of null // 3 
    console.log(this.historyList.length); // 0
    if (historylist) { // historyList 存在
      console.log(historylist);
      if (historylist.indexOf(this.keywords) == -1) {
        historylist.push(this.keywords);
      }
      this.storage.set('historyList', historylist);
    } else {  // historyList 不存在
      historylist = [];
      console.log(historylist); // []
      historylist.push(this.keywords);
      console.log(historylist); // ["手"]
      this.storage.set('historyList', historylist); // key : historyList ; value:["手"]
      // }
    }
  }

  // 讀取歷史紀錄
  getHistory() {
    let historylist = this.storage.get('historyList');
    if (historylist) {  // 解決 Error  Cannot read property 'length' of null
      console.log(historylist); // (3) ["手", "D", "2"]
      console.log(this.historyList); // []
      this.historyList = historylist;
      console.log(this.historyList); // (3) ["手", "D", "2"]
      console.log(this.historyList.length); // 3
    }
  }

  // 刪除歷史紀錄
  async removeHistory(key) {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay' + key); // Confirm Okay1
            console.log(this.historyList); // (3) ["手", "D", "2"]
            this.historyList.splice(key, 1);
            console.log(this.historyList); // (2) ["手", "2"]
            this.storage.set('historyList', this.historyList);

          }
        }
      ]
    });

    await alert.present();
  }
}