import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/****** SERVICES ******/
import { AuthGuardService as AuthGuard } from "../services/auth-guard.service";


const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
