import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PromptComponent } from './components/prompt/prompt.component';
import { TerminalRoutingModule as PromptRoutingModule } from './prompt-routing.module';
import { HelpCommandService } from './services/commands/help/help-command.service';
import { TerminalComponent } from './components/terminal/terminal.component';



@NgModule({
  declarations: [
    PromptComponent,
    TerminalComponent
  ],
  imports: [
    CommonModule,
    PromptRoutingModule,
    SharedModule
  ],
  providers: [
    HelpCommandService
  ]
})
export class PromptModule { }
