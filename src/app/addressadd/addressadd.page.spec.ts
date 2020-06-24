import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddressaddPage } from './addressadd.page';

describe('AddressaddPage', () => {
  let component: AddressaddPage;
  let fixture: ComponentFixture<AddressaddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressaddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddressaddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
