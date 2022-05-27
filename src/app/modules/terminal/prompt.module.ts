import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromptComponent } from './components/prompt/prompt.component';
import { TerminalRoutingModule as PromptRoutingModule } from './prompt-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PromptComponent
  ],
  imports: [
    CommonModule,
    PromptRoutingModule,
    SharedModule
  ]
})
export class PromptModule { }
