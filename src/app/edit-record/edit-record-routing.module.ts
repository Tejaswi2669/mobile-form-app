import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditRecordPage } from './edit-record.page';

const routes: Routes = [
  {
    path: '',
    component: EditRecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditRecordPageRoutingModule {}
