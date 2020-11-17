
// ####################################################################
// ######################## Externals #################################
// ####################################################################

// ***** @angular *****
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
