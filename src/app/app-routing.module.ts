import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CourseDetailComponent } from './admin/course-detail/course-detail.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './main/search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', children: [{ path: ':id', component: AdminComponent }] },
  { path: 'c', children: [{ path: ':id', component: CourseDetailComponent }] },
  {path: 'search',  component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
