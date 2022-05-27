import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PromptComponent } from './components/prompt/prompt.component';
import { TerminalRoutingModule as PromptRoutingModule } from './prompt-routing.module';
import { HelpCommandService } from './services/commands/help/help-command.service';
import { TerminalComponent } from './components/terminal/terminal.component';
import { AutoFocus } from './directives/auto-focus.directive';



@NgModule({
  declarations: [
    PromptComponent,
    TerminalComponent,
    AutoFocus
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
