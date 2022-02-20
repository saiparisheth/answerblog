import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-add-week',
  templateUrl: './add-week.component.html',
  styleUrls: ['./add-week.component.scss'],
})
export class AddWeekComponent implements OnInit {
  form: FormGroup;
  isLoading = false;

  constructor(
    private dialogRef: MatDialogRef<AddWeekComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { courseId: string },
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this._initForm();
  }

  onSubmit() {
    this.isLoading = true;
    if (this.form.invalid) return;

    const form = {
      name: this.form.value.name,
      description: this.form.value.description,
      courseId: this.data.courseId,
      date: new Date(),
    };

    this.adminService.addNewWeek(form).subscribe((res) => {
      if (res.week != null) {
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
      detail: ['', [Validators.required]],
    });
  }
}
