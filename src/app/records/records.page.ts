// src/app/records/records.page.ts

import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../services/form-data.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { NavigationEnd, Router } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';
import { RecordService } from '../services/record.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-records',
  templateUrl: './records.page.html',
  styleUrls: ['./records.page.scss'],
})
export class RecordsPage implements OnInit, ViewWillEnter {

  records: any[] = [];
  private recordUpdateSubscription!: Subscription;


  constructor(
    private formDataService: FormDataService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private router: Router,
    private recordService:RecordService
  ) { }

  ngOnInit() {
    

    // Subscribe to record updates
    this.recordUpdateSubscription = this.recordService.recordUpdated$.subscribe(() => {
      this.loadRecords();
    });
  }

  ionViewWillEnter() {
    this.loadRecords();
   
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    if (this.recordUpdateSubscription) {
      this.recordUpdateSubscription.unsubscribe();
    }
  }

  async loadRecords() {
    const loading = await this.loadingController.create({
      message: 'Loading Records...'
    });
    await loading.present();

    this.formDataService.getAllRecords().subscribe({
      next: (response) => {
        this.records = response.data;
        loading.dismiss();
      },
      error: async (error) => {
        loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Failed to load records. Please try again.',
          buttons: ['OK']
        });
        await alert.present();
        console.error('Error fetching records:', error);
      }
    });
  }

  // Navigate to Edit Record Page
  editRecord(record: any) {
    this.router.navigate(['/edit-record', record.documentId]);
    

  }

  // Optional: Delete Record
  async deleteRecord(record: any) {
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: `Are you sure you want to delete record "${record.name}"?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.formDataService.deleteRecord(record.id).subscribe({
              next: () => {
                this.records = this.records.filter(r => r.id !== record.id);
              },
              error: async (error) => {
                const errorAlert = await this.alertController.create({
                  header: 'Error',
                  message: 'Failed to delete the record. Please try again.',
                  buttons: ['OK']
                });
                await errorAlert.present();
                console.error('Error deleting record:', error);
              }
            });
          }
        }
      ]
    });
    await alert.present();
  }

}
