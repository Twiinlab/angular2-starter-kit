import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home.routing';
import { HomeComponent }   from './home.component';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    HomeRoutingModule,
    MaterialModule.forRoot()
  ],
  exports: [],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule { }