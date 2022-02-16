import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  imports: [ButtonModule, InputTextModule, ToastModule, ProgressSpinnerModule],
  exports: [ButtonModule, InputTextModule, ToastModule, ProgressSpinnerModule],
})
export class PrimengModule {}
