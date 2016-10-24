import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { Home } from './home';
// import { About } from './about';
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'about', loadChildren: './about' },
  { path: 'detail', loadChildren: () => System.import('./+detail') },
  { path: '**',    component: NoContent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }