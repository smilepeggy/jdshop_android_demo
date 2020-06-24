import { Component } from '@angular/core';
// import JS 跳轉
import { NavController } from '@ionic/angular';
// import services
import { CommonService } from '../services/common.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public lcatelist: any[] = [];
  public rcatelist: any[] = [];
  public selectedId: any = ''; // 用來保存被選中的id 進行active變顏色
  // 配置文件 已知config為object{}
  public config: any = {};
  constructor(public navController: NavController, public common: CommonService) {
    this.config = this.common.config;
    // for (let i = 1; i < 16; i++) {
    //   this.lcatelist.push(`Cate ${i}`);
    // }

    // for (let i = 1; i <= 12; i++) {
    //   this.rcatelist.push({
    //     pic: 'assets/list' + i + '.jpg',
    //     title: 'This is No.' + i,
    //   });
    // }
  }

  ngOnInit(): void {
    this.getLeftCateData();
  }

  // js 跳轉頁面
  goSearch() {
    this.navController.navigateForward('search');
  }


  getLeftCateData() {
    // 完整地址為 http://jd.itying.com/api/pcate
    const api = 'api/pcate';
    this.common.ajaxGet(api).then((response: any) => {
      console.log(response);
      this.lcatelist = response.result; // Property 'result' does not exist on type 'unknown'.需要respnse加上any類型
      console.log(this.lcatelist); // (9)....
      this.getRightCataData(this.lcatelist[0]._id);
    });
  }

  // 傳入pid
  getRightCataData(pid) {
    this.selectedId = pid; // 把當前的pid給selectedId
    // 完整地址為 http://jd.itying.com/api/pcate?pid=59f1e1ada1da8b15d42234e9
    const api = 'api/pcate?pid=' + pid;
    this.common.ajaxGet(api).then((response: any) => {
      console.log(response);
      this.rcatelist = response.result; // Property 'result' does not exist on type 'unknown'.需要respnse加上any類型
      console.log(this.rcatelist);
    });
  }

}
