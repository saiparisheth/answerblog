import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  imports: [
    ButtonModule,
    InputTextModule,
    ToastModule,
    ProgressSpinnerModule,
    TooltipModule,
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    ToastModule,
    ProgressSpinnerModule,
    TooltipModule,
  ],
})
export class PrimengModule {}
