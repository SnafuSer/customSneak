
// ####################################################################
// ######################## Externals #################################
// ####################################################################

// ***** @angular *****
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// ***** Services *****
import { AuthGuardService } from '../services/auth-guard.service';
import { AuthService } from '../services/auth.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  providers: [
    AuthGuardService,
    AuthService
  ],
  bootstrap: [],
  entryComponents: [],
  exports: []
})
export class ServiceModule { }
