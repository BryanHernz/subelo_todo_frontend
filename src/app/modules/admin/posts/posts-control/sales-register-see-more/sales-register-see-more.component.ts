import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sales-register-see-more',
  templateUrl: './sales-register-see-more.component.html',
  styleUrls: ['./sales-register-see-more.component.css']
})
export class SalesRegisterSeeMoreComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<SalesRegisterSeeMoreComponent>, private dialog: MatDialog) {
  }

  order = this.data;
  
  ruta:string=environment.imagesUrl

  close(): void {
    this.dialogRef.close(true);
  }
}
