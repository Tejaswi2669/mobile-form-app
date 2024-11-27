// src/app/models/form-submission.model.ts

export interface FormSubmission {
    id: number;
    documentId: string;
    name: string;
    itemDetails: string;
    amountPaid: number;
    actualAmount: number;
    phoneNumber: string;
    userName: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }
  