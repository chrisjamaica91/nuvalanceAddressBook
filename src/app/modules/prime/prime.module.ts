import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {DialogModule} from 'primeng/dialog';
import {InputNumberModule} from 'primeng/inputnumber';
import {ButtonModule} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import {MenubarModule} from 'primeng/menubar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    ToastModule,
    ToolbarModule,
    DialogModule,
    InputNumberModule,
    ButtonModule,
    ConfirmDialogModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    ProgressBarModule,
    InputTextModule,
    FileUploadModule,
    MenubarModule,
    ProgressSpinnerModule,
    CardModule,

  ],
  exports: [
    CommonModule,
    TableModule,
    ToastModule,
    ToolbarModule,
    DialogModule,
    InputNumberModule,
    ButtonModule,
    ConfirmDialogModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    ProgressBarModule,
    InputTextModule,
    FileUploadModule,
    MenubarModule,
    ProgressSpinnerModule,
    CardModule
  ],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class PrimeModule { }
