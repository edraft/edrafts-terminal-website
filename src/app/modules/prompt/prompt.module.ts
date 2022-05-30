import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BannerComponent } from './components/commands/banner/banner.component';
import { HelpComponent } from './components/commands/help/help.component';
import { HistoryComponent } from './components/commands/history/history.component';
import { LanguageComponent } from './components/commands/language/language.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { AutoFocus } from './directives/auto-focus.directive';
import { ClickFocusDirective } from './directives/click-focus.directive';
import { TerminalRoutingModule as PromptRoutingModule } from './prompt-routing.module';
import { UnameComponent } from './components/commands/uname/uname.component';
import { WelcomeComponent } from './components/commands/welcome/welcome.component';



@NgModule({
  declarations: [
    TerminalComponent,
    AutoFocus,
    ClickFocusDirective,
    BannerComponent,
    LanguageComponent,
    HelpComponent,
    HistoryComponent,
    UnameComponent,
    WelcomeComponent,
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
