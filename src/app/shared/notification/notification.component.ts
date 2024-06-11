import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {

  notification: string = '';
  notificationSubscription: Subscription = new Subscription;

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationSubscription = this.notificationService.notification$.subscribe((message) => {
      this.notification = message;
    });
  }

  ngOnDestroy() {
    debugger;
    this.notificationSubscription.unsubscribe();
  }
}
