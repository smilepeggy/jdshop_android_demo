import { Injectable } from '@angular/core';
// import http
import { HttpClient } from '@angular/common/http';
// import Md5加密
import { Md5 } from 'ts-md5/dist/md5';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  // 把config設成對象 object
  public config: any = {
    domain: 'http://jd.itying.com/'
  };
  constructor(public http: HttpClient) { }


  ajaxGet(url) {
    // 完整地址為 http://jd.itying.com/api/focus
    // 用拼接方式比較方便
    // url為api/focus
    const api = this.config.domain + url;
    return new Promise((resolve, reject) => {
      this.http.get(api).subscribe((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    });
  }

  ajaxPost(url, json) {
    // 完整地址為 http://jd.itying.com/api/focus
    // 用拼接方式比較方便
    // url為api/focus
    const api = this.config.domain + url;
    return new Promise((resolve, reject) => {
      this.http.post(api, json).subscribe((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    });
  }

  /*
   生成簽名
   var json={
     uid:123,
     salt:'afsafdafadf'
   }
   */
  sign(json) {
    let tempArr = []; // Cannot assign to 'tempArr' because it is a constant.

    // 寫法一 
    // 提示for (... in ...) statements must be filtered with an if statement (forin)
    // for (const attr in json) {
    //   // console.log(attr); // name
    //   // console.log(json[attr]); //peggy
    //   tempArr.push(attr);
    //   console.log(tempArr); // (2) ["uid", "name"]
    // }

    // 寫法二
    for (const attr of Object.keys(json)) {
      // console.log(attr); // name
      // console.log(json[attr]); //peggy
      tempArr.push(attr);
      console.log(tempArr); // (2) ["uid", "name"]
    }
    tempArr = tempArr.sort(); // 進行ASCII排列

    let tempStr = '';
    for (const i of tempArr) {
      // tempStr += i;
      // console.log(tempStr); // addressnamephoneuid
      // tempStr += json[i];
      // console.log(tempStr); // univerpeggy01234
      tempStr += i + json[i];
      console.log(tempStr); // addressunivernamepeggyphone1234
    }
    // console.log(Md5.hashStr(tempStr)); // 127bf2ed8184b310a7ea34de79587320
    return Md5.hashStr(tempStr); // 127bf2ed8184b310a7ea34de79587320
  }



}
