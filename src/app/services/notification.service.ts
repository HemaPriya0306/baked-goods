import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notificationSubject = new BehaviorSubject<string>('');
  notification$ = this.notificationSubject.asObservable();

  showNotification(message: string, duration: number = 3000) {
    this.notificationSubject.next(message);

    setTimeout(() => {
      this.removeNotification(message);
    }, duration);
  }

  private removeNotification(message: string) {
    this.notificationSubject.next('');
  }
}
