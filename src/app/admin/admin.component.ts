import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  id: string;
  s;
  adminName: string;
  adminMail: string;
  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params) {
        this.id = params['id'];
        this.adminService.getAdminDataById(this.id).subscribe((res) => {
          if (res.admin) {
            this.adminName = res.admin?.name;
            this.adminMail = res.admin?.email;
          }
        });
      }
    });
  }
}
