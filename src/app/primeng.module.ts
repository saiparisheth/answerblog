import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TooltipModule } from 'primeng/tooltip';
import { EditorModule } from 'primeng/editor';

@NgModule({
  imports: [
    ButtonModule,
    InputTextModule,
    ToastModule,
    ProgressSpinnerModule,
    TooltipModule,
    EditorModule,
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    ToastModule,
    ProgressSpinnerModule,
    TooltipModule,
    EditorModule,
  ],
})
export class PrimengModule {}
