import { NgModule } from '@angular/core';

import { AboutRoutingModule } from './about.routing';

import { AboutComponent }   from './about.component';

import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    AboutRoutingModule,
    MaterialModule.forRoot()
  ],
  exports: [],
  declarations: [AboutComponent],
  providers: [],
})
export class AboutModule { }