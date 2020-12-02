import { Component, Input, Inject, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

@Component({
  selector: 'modalImport',
  templateUrl: 'modalImport.html',
  styleUrls: ['./modalImport.scss']
})
export class ModalImportDialog {
  constructor(private dialogRef: MatDialogRef<ModalImportDialog>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data) {
  }
  public toggle = document.getElementById('toggle');
  public toggleContainer = document.getElementById('toggle-container');
  public importInput = document.getElementById('largeFile');
  public toggleNumber;
  public fileLoaded;

  ngOnInit() {
    this.toggle = document.getElementById('toggle');
    this.toggleContainer = document.getElementById('toggle-container');
    this.importInput = document.getElementById('largeFile');
  }

  onClick() {
    this.toggleNumber = !this.toggleNumber;
    if (this.toggleNumber) {
      this.toggleContainer.style.clipPath = 'inset(0 -1px -1px 50%)';
      this.importInput.style.pointerEvents = 'auto';
    } else {
      this.toggleContainer.style.clipPath = 'inset(0 50% -1px -1px)';
      this.importInput.style.pointerEvents = 'none';
    }
  }
  
  loadFile(event) {
    this.fileLoaded = event
    var output = <HTMLImageElement>document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  };
    
  // upload image
  uploadImage() {
    var file = this.fileLoaded.target.files[0];
    this.closeDialog(file)
  }
  closeDialog(item) {
    this.dialogRef.close(item);
  }
}
