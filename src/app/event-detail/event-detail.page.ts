import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage  {
  title: string = '';
  description?: string; // Optional description
  startTime: Date;
  endTime: Date;
  allDay: boolean;

  constructor(
    public modalController: ModalController,
    private navParams: NavParams
  ) {
    // Initialize with default values or from NavParams in ngOnInit
    this.title = this.navParams.get('title');
    this.description = this.navParams.get('description');
    this.startTime = this.navParams.get('startTime');
    this.endTime = this.navParams.get('endTime');
    this.allDay = this.navParams.get('allDay');
  }



  close(){
    this.modalController.dismiss();
  }}
