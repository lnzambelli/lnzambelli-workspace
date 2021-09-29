import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'ace-toolbar',
  template: `
    <mat-toolbar color="primary" class="flex justify-between">
      <mat-toolbar-row class="flex justify-between">
        <div>
          <button mat-icon-button (click)="expandirMenu()">
            <mat-icon>menu</mat-icon>
          </button>
          <span>{{nombreDeEmpresa}}</span>
        </div>
        <div> 
          <a mat-icon-button [href]="linkFacebook" Target="_blank">
             <mat-icon>facebook</mat-icon>
          </a>
          <a mat-icon-button [href]="linkInstagram" Target="_blank">
             <mat-icon>photo_camera</mat-icon>
          </a>
          <button mat-icon-button routerLink="/shopping-cart">
             <mat-icon>shopping_cart</mat-icon>
          </button>
        </div>
      </mat-toolbar-row>
      <mat-toolbar-row class="flex flex-column align-items-start mx-16" style="height: 100%" *ngIf="expanded" >
        <button mat-button routerLink="/home" (click)="expandirMenu()">Home</button>
        <button mat-button routerLink="/product" (click)="expandirMenu()">Productos</button>
        <button mat-button routerLink="/contact" (click)="expandirMenu()">Contacto</button>
    </mat-toolbar-row>
    </mat-toolbar>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit {

  public expanded= false;
  public nombreDeEmpresa!: string; 
  public linkFacebook!: string;
  public linkInstagram!: string;

  constructor() { }

  ngOnInit(){
    this.nombreDeEmpresa = "";
    this.linkFacebook = "";
    this.linkInstagram = "";
  }

  expandirMenu(){
    this.expanded = !this.expanded;
  }

}


@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports:[
    ToolbarComponent
  ]
})
export class ToolbarModule { }