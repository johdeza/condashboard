import { RouterModule } from '@angular/router';
import { MyfooterComponent } from './myfooter/myfooter.component';
import { MynavbarComponent } from './mynavbar/mynavbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [MyfooterComponent, MynavbarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [MynavbarComponent, MyfooterComponent]
})
export class MysharedmoduleModule { }
