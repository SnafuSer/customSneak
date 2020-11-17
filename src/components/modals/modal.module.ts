import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

// ***** Dialogs *****
import { BlankDialog } from './blankModal/blank';
import { ModalLibDialog } from './modalLib/modalLib';
import { ModalImportDialog } from './modalImport/modalImport';

import { SharedModule } from "../../app/shared.module";

@NgModule({
  declarations: [
    BlankDialog,
    ModalLibDialog,
    ModalImportDialog,
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
    ModalLibDialog,
    ModalImportDialog,
  ],
  exports: [
    BlankDialog,
    ModalLibDialog,
    ModalImportDialog,
  ]
})
export class ModalModule { }
