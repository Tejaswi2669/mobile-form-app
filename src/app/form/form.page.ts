// src/app/form/form.page.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormDataService } from '../services/form-data.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  form: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private formDataService: FormDataService,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      itemDetails: ['', Validators.required],
      amountPaid: ['', [Validators.required, Validators.min(0)]],
      actualAmount: ['', [Validators.required, Validators.min(0)]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      userName: ['', Validators.required],
    });
  }

  ngOnInit() { }

  async onSubmit() {
    if (this.form.valid) {
      this.isLoading = true;
      const loading = await this.loadingController.create({
        message: 'Submitting Form...'
      });
      await loading.present();

      this.formDataService.submitForm(this.form.value).subscribe({
        next: async (response) => {
          this.isLoading = false;
          await loading.dismiss();
          const alert = await this.alertController.create({
            header: 'Success',
            message: 'Form submitted successfully!',
            buttons: ['OK']
          });
          await alert.present();
          this.form.reset();
        },
        error: async (error) => {
          this.isLoading = false;
          await loading.dismiss();
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'Failed to submit the form. Please try again.',
            buttons: ['OK']
          });
          await alert.present();
          console.error('Error submitting form:', error);
        }
      });
    } else {
      // Mark all fields as touched to trigger validation messages
      this.form.markAllAsTouched();
    }
  }

}
