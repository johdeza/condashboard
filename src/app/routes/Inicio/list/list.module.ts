import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: ListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [ListComponent],
  exports: [RouterModule],
})
export class ListModule {}
