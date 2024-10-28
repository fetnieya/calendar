import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';
import { CalendarMode } from 'ionic2-calendar';

interface Event {
  title: any;
  description: any;
  startTime: Date | string;
  endTime: Date | string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  allEvents: Event[] = [];
  currentMonth: string | undefined;
  calendar = {
    mode: 'month' as CalendarMode,
    currentDate: new Date(2024, 10, 28),
  };
  newEvent: Event = {
    title: '',
    description: '',
    startTime: new Date().toISOString(),
    endTime: new Date().toISOString(),
  };
  myData: Event[] = [
    {
      title: 'My First Event',
      description: 'Event 1 description',
      startTime: new Date(2024, 10, 22, 12, 0),
      endTime: new Date(2024, 10, 22, 13, 0),
    },
    {
      title: 'My Second Event',
      description: 'Event 2 description',
      startTime: new Date(2024, 10, 23, 14, 0),
      endTime: new Date(2024, 10, 23, 15, 0),
    },
    {
      title: 'My Third Event',
      description: 'Event 3 description',
      startTime: new Date(2024, 10, 24, 10, 0),
      endTime: new Date(2024, 10, 24, 11, 0),
    },
  ];
  showAddEvent: boolean | undefined;

  @ViewChild(CalendarComponent) myCal!: CalendarComponent;

  constructor() {}

  ngOnInit() {
    this.allEvents = this.myData;
  }

  onViewTitleChanged(title: string) {
    this.currentMonth = title;
  }

  onEventSelected(ev: Event) {
    this.newEvent = ev;
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
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
    };
  }
}
