import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-notifications-see-more',
  templateUrl: './notifications-see-more.component.html',
  styleUrls: ['./notifications-see-more.component.css']
})
export class NotificationsSeeMoreComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<NotificationsSeeMoreComponent>, private dialog: MatDialog) {
  }

  close(): void {
    this.dialogRef.close(true);
  }
}
