import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    // localStorage.setItem(key, value);
    console.log(value); // ["手"] // (3) ["手", "D", "2"]
    console.log(value.length); // 3
    // console.log(JSON.stringify(value));
    // console.log(JSON.parse(value));
    console.log(key); // historyList

  }
  get(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  remove(key) {
    localStorage.removeItem(key);
  }
}
