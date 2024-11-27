// src/app/edit-record/edit-record.page.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormDataService } from '../services/form-data.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { FormSubmission } from '../models/form-submission.model';
import { RecordService } from '../services/record.service';

@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.page.html',
  styleUrls: ['./edit-record.page.scss'],
})
export class EditRecordPage implements OnInit {

  documentId!: string; // Changed from number id to string documentId
  record!: FormSubmission; // Strongly typed
  form: FormGroup;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private formDataService: FormDataService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private recordService :RecordService
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

  ngOnInit() {
    const docIdParam = this.route.snapshot.paramMap.get('documentId');
    if (docIdParam !== null) {
      this.documentId = docIdParam;
      this.loadRecord();
    } else {
      this.handleMissingId();
    }
  }

  async handleInvalidId() {
    const alert = await this.alertController.create({
      header: 'Invalid Document ID',
      message: 'The provided document ID is invalid.',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.router.navigate(['/tabs/records']);
        }
      }]
    });
    await alert.present();
  }

  async handleMissingId() {
    const alert = await this.alertController.create({
      header: 'Missing Document ID',
      message: 'No document ID was provided.',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.router.navigate(['/tabs/records']);
        }
      }]
    });
    await alert.present();
  }

  async loadRecord() {
    const loading = await this.loadingController.create({
      message: 'Loading Record...'
    });
    await loading.present();

    this.formDataService.getRecordByDocumentId(this.documentId).subscribe({
      next: (record) => {
        if (record) {
          this.record = record;
          this.form.patchValue({
            name: this.record.name,
            itemDetails: this.record.itemDetails,
            amountPaid: this.record.amountPaid,
            actualAmount: this.record.actualAmount,
            phoneNumber: this.record.phoneNumber,
            userName: this.record.userName,
          });
          loading.dismiss();
        } else {
          loading.dismiss();
          this.showAlert('Record Not Found', 'The record you are trying to edit does not exist.');
        }
      },
      error: async (error) => {
        loading.dismiss();
        this.showAlert('Error', 'Failed to load the record. Please try again.');
        console.error('Error fetching record:', error);
      }
    });
  }

  async onSubmit() {
    if (this.form.valid) {
      this.isLoading = true;
      const updatedData = this.form.value;

      const loading = await this.loadingController.create({
        message: 'Updating Record...'
      });
      await loading.present();

      // Update using the record's id
      this.formDataService.updateRecord(this.documentId, updatedData).subscribe({
        next: async () => {
          this.isLoading = false;
          await loading.dismiss();

          this.recordService.emitRecordUpdated();
          const alert = await this.alertController.create({
            header: 'Success',
            message: 'Record updated successfully!',
            buttons: [{
              text: 'OK',
              handler: () => {
                this.router.navigate(['/tabs/records']);
              }
            }]
          });
          await alert.present();
        },
        error: async (error) => {
          this.isLoading = false;
          await loading.dismiss();
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'Failed to update the record. Please try again.',
            buttons: ['OK']
          });
          await alert.present();
          console.error('Error updating record:', error);
        }
      });
    } else {
      // Mark all fields as touched to trigger validation messages
      this.form.markAllAsTouched();
    }
  }

  // Optional: Navigate back without saving
  cancel() {
    this.router.navigate(['/tabs/records']);
  }

  // Helper method to show alerts
  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

}
