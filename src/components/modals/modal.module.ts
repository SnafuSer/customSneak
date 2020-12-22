import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

// ***** Dialogs *****
import { BlankDialog } from './blankModal/blank';
import { ModalImportDialog } from './modalImport/modalImport';
import { ModalLibDialog } from './modalLib/modalLib';
import { ModalNikeDialog } from './modalNike/modalNike';

import { SharedModule } from "../../app/shared.module";

@NgModule({
  declarations: [
    BlankDialog,
    ModalImportDialog,
    ModalLibDialog,
    ModalNikeDialog,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
  ],
  providers: [
  ],
  bootstrap: [],
  entryComponents: [
    BlankDialog,
    ModalImportDialog,
    ModalLibDialog,
    ModalNikeDialog,
  ],
  exports: [
    BlankDialog,
    ModalImportDialog,
    ModalLibDialog,
    ModalNikeDialog,
  ]
})
export class ModalModule { }
