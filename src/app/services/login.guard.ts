import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
// import Storage服務
import { StorageService } from '../services/storage.service';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  //   throw new Error("Method not implemented."); // 用提示生成的
  // }
  constructor(public storage: StorageService) {

  }
  canActivate() {

    console.log('canActivate');
    // 判断用户是否登入
    const userinfo = this.storage.get('userinfo');
    if (!userinfo || !userinfo.username) {
      return false; // 沒登入
    } else {
      return true; // 有登入
    }

  }

}
