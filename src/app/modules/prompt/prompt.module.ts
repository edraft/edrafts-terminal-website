import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PromptComponent } from './components/prompt/prompt.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { AutoFocus } from './directives/auto-focus.directive';
import { TerminalRoutingModule as PromptRoutingModule } from './prompt-routing.module';
import { ClickFocusDirective } from './directives/click-focus.directive';
import { BannerComponent } from './components/commands/banner/banner.component';
import { LanguageComponent } from './components/commands/language/language.component';
import { HelpComponent } from './components/commands/help/help.component';
import { HistoryComponent } from './components/commands/history/history.component';



@NgModule({
  declarations: [
    PromptComponent,
    TerminalComponent,
    AutoFocus,
    ClickFocusDirective,
    BannerComponent,
    LanguageComponent,
    HelpComponent,
    HistoryComponent,
  ],
  imports: [
    CommonModule,
    PromptRoutingModule,
    SharedModule
  ],
  providers: [
  ]
})
export class PromptModule { }
