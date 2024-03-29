import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-admin-vertical-menu',
  templateUrl: './admin-vertical-menu.component.html',
  styleUrls: ['./admin-vertical-menu.component.css']
})
export class AdminVerticalMenuComponent {

  constructor(private router: Router, private dialog: MatDialog) { }

  ubicacion:string=this.router.url;
  name:string=localStorage.getItem('userName')?.split(' ')[0]!;
  lastName:string=localStorage.getItem('userLastName')?.split(' ')[0]!;
  email:string= localStorage.getItem('email')!;
  
  openDialog() {
    const dialogRef = this.dialog.open(LogoutComponent);
  }  
}
