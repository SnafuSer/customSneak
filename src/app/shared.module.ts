
// ####################################################################
// ######################## Externals #################################
// ####################################################################

// ***** @angular *****
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as  Cloudinary from 'cloudinary-core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

// ***** Material *****
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatSnackBarModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatExpansionModule,
  MatMenuModule,
  MatAutocompleteModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatSelectModule,
  MatGridListModule,
  MatToolbarModule,
  MatIconModule
} from '@angular/material';
// ***** other *****
import { InlineSVGModule } from 'ng-inline-svg';
import { environment } from '../environments/environment';

// ####################################################################
// ######################## Internal #################################
// ####################################################################

// ***** App *****

// ***** Pipe *****

@NgModule({
  declarations: [
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    InlineSVGModule.forRoot(),
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    BrowserModule,
    MatSidenavModule,
    MatSelectModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    CloudinaryModule.forRoot(Cloudinary, { cloud_name: 'deck4daxl'}),
  ],
  providers: [
    CloudinaryModule,
  ],
  bootstrap: [],
  entryComponents: [],
  exports: [
    AngularFireModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    InlineSVGModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    BrowserModule,
    MatSidenavModule,
    MatSelectModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class SharedModule { }
