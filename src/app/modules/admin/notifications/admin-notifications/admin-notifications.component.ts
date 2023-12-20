import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminNotificationsMarkReadComponent } from '../admin-notifications-mark-read/admin-notifications-mark-read.component';
import { AdminNotificationsSeeMoreComponent } from '../admin-notifications-see-more/admin-notifications-see-more.component';
import { NotificationService } from 'src/app/services/notificationservice/notification.service';
import { NotificationModel } from 'src/app/models/notificationModel';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-notifications',
  templateUrl: './admin-notifications.component.html',
  styleUrls: ['./admin-notifications.component.css']
})
export class AdminNotificationsComponent implements OnInit {

  ruta:string=environment.imagesUrl

  notifications:string[] = ['Hace 10 min ','Hace 45 min ','Hace 1 Horas 10 min','Hace 1 Horas 30 min','Hace 1 Hora 45 min','Hace 2 Horas'] 

  notificaciones:NotificationModel[]=[];

  constructor(private dialog: MatDialog,private notificationservice:NotificationService) {}

  ngOnInit(): void {
    this.notificationservice.getUserNotifications().subscribe(data=>{
      this.notificaciones=data.reverse();
      console.log(this.notificaciones);
    })
  }

  openReadDialog(id:string) {
    const dialogRef = this.dialog.open(AdminNotificationsMarkReadComponent,{data:id});
  }  

  openSeeMoreDialog(notification:NotificationModel) {
    const dialogRef = this.dialog.open(AdminNotificationsSeeMoreComponent,{data:notification});
  }
}
