import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditRecordPage } from './edit-record.page';

describe('EditRecordPage', () => {
  let component: EditRecordPage;
  let fixture: ComponentFixture<EditRecordPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
