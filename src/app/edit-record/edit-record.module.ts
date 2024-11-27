import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditRecordPageRoutingModule } from './edit-record-routing.module';

import { EditRecordPage } from './edit-record.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, 
    EditRecordPageRoutingModule
  ],
  declarations: [EditRecordPage]
})
export class EditRecordPageModule {}
