import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './404.component';

const nfRoutes: Routes = [
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [
    RouterModule.forChild(nfRoutes),
  ],
  exports: [ RouterModule]
})

export class NotFoundRoutingModule { }
