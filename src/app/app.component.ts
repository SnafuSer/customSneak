import { Component, HostListener } from '@angular/core';
import { fabric } from 'fabric';
import { ModalLibDialog } from "../components/modals/modalLib/modalLib";
import { ModalImportDialog } from "../components/modals/modalImport/modalImport";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AssetsLibService } from '../services/assetsLib.service'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface SideShoes {
  img: string;
  svg: string;
  json: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private dialog: MatDialog,
    private assetsLib: AssetsLibService,
    public sanitizer: DomSanitizer) {}
    
    public step: number = 1
    public choice: any
 
  }
