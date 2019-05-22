import { Component, OnInit } from '@angular/core';
import { EventHandlerService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SCCM Tracker';
  loading = false;

  constructor(private eventHanderService: EventHandlerService) {
    this.initSubscribe();
  }

  ngOnInit() {}

  showLoading() {
    this.eventHanderService.publish('SHOW_LOADING', true);
  }

  hideLoading() {
    this.eventHanderService.publish('SHOW_LOADING', false);
  }

  private initSubscribe() {
    this.eventHanderService.$subscribe('SHOW_LOADING').subscribe(result => {
      setTimeout(() => {
        this.loading = result;
      });
    });
  }
}
