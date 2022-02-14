import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [MatIconModule, MatButtonModule, MatCardModule, MatDividerModule],
  exports: [MatIconModule, MatButtonModule, MatCardModule, MatDividerModule],
})
export class MaterialModule {}
