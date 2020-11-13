import { MysharedmoduleModule } from './../mysharedcomponents/mysharedmodule.module';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MysharedmoduleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent],
  exports: [
    RouterModule
]
  
})
export class LoginModule { }
