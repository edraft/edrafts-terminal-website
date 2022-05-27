import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TerminalModule, TerminalService } from 'primeng/terminal';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TerminalModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    TerminalModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    TerminalService
  ]
})
export class SharedModule { }
