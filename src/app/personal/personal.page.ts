import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
// import Storage服務
import { StorageService } from '../services/storage.service';
// import JS 跳轉
import { NavController } from '@ionic/angular';
// import eventemitter3 服務
import { EventService } from '../services/event.service';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./personal.page.scss'],
})
export class PersonalPage implements OnInit {
  public userSettings: any = {
    sex: 'Man',
    day: '2014-03-23'

  }

  public customPickerOptions = {
    buttons: [{
      text: 'Cancel', handler: () => {

        console.log('Clicked Save!')
      }
    }, {
      text: 'Save', handler: (result) => {
        // console.log('Clicked Log. Do not Dismiss.');

        this.userSettings.day = result;
      }
    }]
  };
  constructor(public actionSheetController: ActionSheetController, public storage: StorageService, public navController: NavController, public eventService: EventService) { }

  ngOnInit() {

  }
  ngOnDestroy(): void {
    // post到server也是在這
    console.log(this.userSettings);
  }

  async showSex() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Sex',
      buttons: [{
        text: 'Man',
        handler: () => {
          this.userSettings.sex = "Man";
        }
      },
      {
        text: 'Female',
        handler: () => {
          this.userSettings.sex = "Female";
        }
      },
      {
        text: 'cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  doLoginOut() {
    // console.log('Logout');
    this.storage.remove('userinfo');
    // 通知tab4更新信息
    this.eventService.event.emit('useraction');
    this.navController.navigateBack('/tabs/tab4');
  }
  goBack() {
    this.navController.navigateBack('/tabs/tab4');
  }


}
