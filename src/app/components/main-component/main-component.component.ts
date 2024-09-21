import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { ProductAddComponent } from '../product-add/product-add.component';


@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  dataSource: MatTableDataSource<any> | undefined;
  displayedColumns: string[] = ['productName', 'productDescription', 'productPurchasePrice', 'productSellingPrice', 'productQuantity', 'productActive'];

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  
  constructor(private productService: ProductService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadProducts();

   
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource!.paginator = this.paginator;
        // this.paginator.pageSize = 25; // Set default page size selected to 25
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  openAddProductDialog() {
    this.dialog.open(ProductAddComponent, {
      width: '500px',
      height: '70%',
      hasBackdrop: true, 
      disableClose: true,

      data: { /*data passed to the dialog component */ },
    });
  }

  openAddProductDialog2() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(ProductAddComponent, dialogConfig);
}



}
