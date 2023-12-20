import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { BannerModel } from 'src/app/models/bannerModel';
import { FormGroup, FormControl } from '@angular/forms';
import { BannersService } from 'src/app/services/bannerservice/banners.service';

@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.css']
})
export class EditBannerComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<EditBannerComponent>,private bannerservice:BannersService) {
    
  }

  banner:BannerModel=this.data;

  editBanner=new FormGroup({
    title:new FormControl(this.banner.title),
    text:new FormControl(this.banner.text),
  })

  guardar(){
    this.bannerservice.saveBanner({
      'id':this.banner.id,
      'title':this.editBanner.value.title!,
      'text':this.editBanner.value.text!,
    }).subscribe(data=>{console.log(data),
      window.location.reload()})
    this.close();
    this.openDialog();
  }

  close(): void {
    this.dialogRef.close(true);
  }

  openDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        titulo: 'Guardado realizado',
        mensaje: 'Banner ha sido editado  exitosamente ',
        tipo:'confirmacion',
      }
    });
    this.close();
  }

  
}
