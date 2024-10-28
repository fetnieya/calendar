import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarComponent, CalendarMode } from 'ionic2-calendar';
import { EventDetailPage } from '../event-detail/event-detail.page';

// Define the IEvent interface with optional properties
interface IEvent {
  title: string;
  description?: string; // Make description optional
  startTime: Date;
  endTime: Date;
  allDay: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  allEvents: IEvent[] = [];
  currentMonth: string | undefined;
  calendar = {
    mode: 'month' as CalendarMode,
    currentDate: new Date(2024,10,29),
  };

  newEvent: IEvent = {
    title: '',
    description: '',
    startTime: new Date(),
    endTime: new Date(),
    allDay: false,
  };

  // Sample data for events
  myData: IEvent[] = [
    {
      title: 'My First Event',
      description: 'Event 1 description',
      startTime: new Date(2024, 10, 22, 12, 0),
      endTime: new Date(2024, 10, 22, 13, 0),
      allDay: false,
    },
    {
      title: 'My Second Event',
      description: 'Event 2 description',
      startTime: new Date(2024, 10, 23, 14, 0),
      endTime: new Date(2024, 10, 23, 15, 0),
      allDay: false,
    },
    {
      title: 'My Third Event',
      description: 'Event 3 description',
      startTime: new Date(2024, 10, 24, 10, 0),
      endTime: new Date(2024, 10, 24, 11, 0),
      allDay: false,
    },
  ];

  showAddEvent: boolean = false; // Default to false

  @ViewChild(CalendarComponent) myCal!: CalendarComponent;
minDate: any;

  constructor(public modalController : ModalController) {}

  ngOnInit() {
    this.allEvents = this.myData;
  }

  onViewTitleChanged(title: string) {
    this.currentMonth = title;
  }

  async onEventSelected(ev: any) {
    this.newEvent = ev;
    const modal =this.modalController.create({
  component:EventDetailPage,
  componentProps: ev
 })
  return (await modal).present();
  }

  back() {
    this.myCal.slidePrev();
  }

  next() {
    this.myCal.slideNext();
  }

  showHideForm() {
    this.showAddEvent = !this.showAddEvent;
    this.newEvent = {
      title: '',
      description: '',
      startTime: new Date(),
      endTime: new Date(),
      allDay: false,
    };
  }

  today() {
    this.calendar.currentDate = new Date();
  }

  changeMode(mode: CalendarMode) {
    this.calendar.mode = mode;
  }

  addEvent() {
    this.allEvents.push({ // Correctly push to allEvents
      title: this.newEvent.title,
      description: this.newEvent.description,
      startTime: this.newEvent.startTime,
      endTime: this.newEvent.endTime,
      allDay: this.newEvent.allDay,
    });
    console.log('====================================');
    console.log(this.newEvent);
    console.log('====================================');

    // Reset the newEvent form
    this.showHideForm();
  }

}
