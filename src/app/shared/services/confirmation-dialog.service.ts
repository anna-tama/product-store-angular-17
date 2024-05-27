import { Component, Injectable, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Observable, filter } from 'rxjs';
import { ProductsService } from './products.service';
import { Product } from '../interfaces/product.interface';


@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  template: `
  <h2 mat-dialog-title>Eliminar producto</h2>
  <mat-dialog-content>¿Está seguro que quiere borrar este producto?</mat-dialog-content>
  <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close (click)="onNo()">No</button>
      <button mat-raised-button color="accent" mat-dialog-close cdkFocusInitial (click)="onYes()">Ok</button>
  </mat-dialog-actions>
  `,
})
export class ConfirmationDialogComponent {

  matDialogReF = inject(MatDialogRef);

  onNo() {
    this.matDialogReF.close(false);
  }

  onYes() {
    this.matDialogReF.close(true);
  }
}

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {

  matDialog = inject(MatDialog)
  productsService = inject(ProductsService);
  
  constructor() { }
  openDialog(): Observable<boolean> {
    return this.matDialog
      .open(ConfirmationDialogComponent)
      .afterClosed()
  }
}
