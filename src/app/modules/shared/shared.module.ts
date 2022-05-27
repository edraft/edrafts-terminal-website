import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TerminalModule, TerminalService } from 'primeng/terminal';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TerminalModule
  ],
  exports: [
    TerminalModule,
    TranslateModule
  ],
  providers: [
    TerminalService,
    TranslateModule
  ]
})
export class SharedModule { }
