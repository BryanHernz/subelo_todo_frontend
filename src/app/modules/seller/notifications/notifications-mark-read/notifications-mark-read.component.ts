import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from 'src/app/services/notificationservice/notification.service';

@Component({
  selector: 'app-notifications-mark-read',
  templateUrl: './notifications-mark-read.component.html',
  styleUrls: ['./notifications-mark-read.component.css']
})
export class NotificationsMarkReadComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<NotificationsMarkReadComponent>, private notification: NotificationService) { 
  }

  id:string=this.data;

  close(): void {
    this.notification.deleteNotification(this.id).subscribe()
    this.dialogRef.close(true);
    window.location.reload();
  }
}
