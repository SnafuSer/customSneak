
// ####################################################################
// ######################## Externals #################################
// ####################################################################

// ***** @angular *****
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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

// ####################################################################
// ######################## Internal #################################
// ####################################################################

// ***** App *****

// ***** Pipe *****

@NgModule({
  declarations: [
  ],
  imports: [
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
    MatIconModule
  ],
  providers: [
  ],
  bootstrap: [],
  entryComponents: [],
  exports: [
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
