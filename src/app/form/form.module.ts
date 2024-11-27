// src/app/form/form.module.ts

import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormPageRoutingModule } from './form-routing.module';
import { FormPage } from './form.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // Import ReactiveFormsModule
    FormPageRoutingModule
  ],
  declarations: [FormPage]
})
export class FormPageModule {}
