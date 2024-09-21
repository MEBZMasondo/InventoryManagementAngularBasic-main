import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataholderService } from 'src/app/services/dataholder.service';
import { LookUpService } from 'src/app/services/look-up.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  addform! : FormGroup;
  productActiveOptions: any;

  constructor(
    public dialogRef: MatDialogRef<ProductAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private lookUpService : LookUpService,
    private lataholderService : DataholderService,
  ) { }

  ngOnInit(): void {
    

  }

 
  save() {

  }

  close() {
    if (this.dialogRef) {
      this.dialogRef.close(); // Close the dialog if it is open
    }
  }




}
