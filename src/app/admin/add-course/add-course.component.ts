import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent implements OnInit {
  form: FormGroup;
  isLoading = false;

  constructor(
    private adminService: AdminService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddCourseComponent>,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this._initForm();
  }

  onSubmit() {
    this.isLoading = true;
    if (this.form.invalid) {
      return;
    }

    const form = {
      name: this.form.get('name').value,
      description: this.form.get('description').value,
      adminId: this.data.id,
    };

    this.adminService.addNewCourse(form).subscribe((res) => {
      if (res.course._id) {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Updated Successfully!',
        });
        window.setTimeout(() => {
          this.dialogRef.close();
          this.isLoading = false;
        }, 2500);
      } else {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: res.message,
        });
        this.isLoading = false;
      }
    });
  }

  private _initForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }
}
