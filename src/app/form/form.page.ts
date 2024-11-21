// src/app/form/form.page.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormDataService } from '../services/form-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private formDataService: FormDataService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      itemDetails: ['', Validators.required],
      amountPaid: ['', [Validators.required, Validators.min(0)]],
      actualAmount: ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit() { }

  onSubmit() {
    if (this.form.valid) {
      this.formDataService.submitForm(this.form.value).subscribe({
        next: (response) => {
          alert('Form submitted successfully!');
          this.form.reset();
        },
        error: (error) => {
          console.error('There was an error!', error);
          alert('Error submitting form. Please try again.');
        }
      });
    } else {
      // Mark all fields as touched to trigger validation messages
      this.form.markAllAsTouched();
    }
  }

}
