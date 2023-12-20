import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from 'src/app/services/notificationservice/notification.service';

@Component({
  selector: 'app-admin-notifications-mark-read',
  templateUrl: './admin-notifications-mark-read.component.html',
  styleUrls: ['./admin-notifications-mark-read.component.css']
})
export class AdminNotificationsMarkReadComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<AdminNotificationsMarkReadComponent>, private notification: NotificationService) { 
  }

  id:string=this.data;

  close(): void {
    this.notification.deleteNotification(this.id).subscribe()
    this.dialogRef.close(true);
    window.location.reload();
  }
}
