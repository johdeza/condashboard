import { MysharedmoduleModule } from './../mysharedcomponents/mysharedmodule.module';
import { NewnutriologistComponent } from './newnutriologist/newnutriologist.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: NewnutriologistComponent },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MysharedmoduleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewnutriologistComponent],
  exports: [
    RouterModule
]
  
})
export class NewnutriologistModule { }
