import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import { TerminalService } from 'primeng/terminal';
import { ConfigService } from '../../../../services/config/config.service';
import { HelpCommandService } from '../../services/commands/help/help-command.service';
import { TerminalService } from '../../services/terminal.service';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.scss'],
  host: {
    '(document:keydown)': 'handleKeyboardEvent($event)'
  }
})
export class PromptComponent implements OnInit {

  welcomeMessage: string = '';
  prompt: string = 'unkown';
  path: string = '~';

  history: string[] = [];
  historyIndex = 0;

  constructor(
    private translate: TranslateService,
    private config: ConfigService,
    private terminal: TerminalService,
    private helpCommand: HelpCommandService
  ) { }

  ngOnInit(): void {
    this.prompt = `${this.translate.instant('prompt.visitor')}@${this.config.getConfig().host}`;
    // this.terminal.commandHandler.subscribe(command => {
    //   let found = true;
    //   let response = '';
    //   switch (command) {
    //     case 'help':
    //       this.helpCommand.run();
    //       break;
    //     default:
    //       response = `${command}: ${this.translate.instant('prompt.command_not_found')}`;
    //       found = false;
    //       break;
    //   }
    //   this.terminal.sendResponse(response);
    // });
    this.terminal.sendCommand('help');
  }

  addCommandToHistory(command: string) {
    this.history.push(command);
    this.historyIndex++;
  }

  handleKeyboardEvent(event: KeyboardEvent) {
    const key = event.key;
    switch (key) {
      case 'ArrowUp':
        if (this.historyIndex <= 0) {
          return;
        }
        this.historyIndex--;
        console.log(this.historyIndex, this.history[this.historyIndex]);
        break;
      case 'ArrowDown':
        if (this.historyIndex >= this.history.length - 1) {
          return;
        }
        this.historyIndex++;
        console.log(this.historyIndex, this.history[this.historyIndex]);
        break;
    }
  }

}
