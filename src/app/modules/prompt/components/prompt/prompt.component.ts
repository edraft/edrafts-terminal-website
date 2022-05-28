import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from '../../../../services/config/config.service';
import { BannerCommandService } from '../../services/commands/banner/banner-command.service';
import { ClearCommandService } from '../../services/commands/clear/clear-command.service';
import { HelpCommandService } from '../../services/commands/help/help-command.service';
import { HistoryCommandService } from '../../services/commands/history/history-command.service';
import { TerminalService } from '../../services/terminal.service';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.scss'],
  host: {
    '(document:keydown)': 'handleKeyboardEvent($event)'
  }
})
export class PromptComponent implements OnInit, AfterViewInit {

  welcomeMessage: string = '';
  prompt: string = 'unkown';
  path: string = '~';
  historyIndex = 0;

  constructor(
    private translate: TranslateService,
    private config: ConfigService,
    private terminal: TerminalService,
    private helpCommand: HelpCommandService,
    private clear: ClearCommandService,
    private banner: BannerCommandService,
    private history: HistoryCommandService
  ) { }

  ngOnInit(): void {
    this.prompt = `${this.translate.instant('prompt.visitor')}@${this.config.getConfig().host}`;
    this.terminal.commandHandler.subscribe(command => {
      let found = true;
      switch (command) {
        case 'banner':
          this.banner.banner();
          break;
        case 'clear':
          this.clear.clear();
          break;
        case 'help':
          this.helpCommand.help();
          break;
          case 'history':
            this.history.history();
            break;
        default:
          this.terminal.sendResponse(command, `${command}: ${this.translate.instant('prompt.command_not_found')}`);
          found = false;
          break;
      }
    });
  }

  ngAfterViewInit(): void {
    let commands = this.config.getConfig().startupCommands;
    for (let index = 0; index < commands.length; index++) {
      const command = commands[index];
      this.terminal.sendCommand(command);
      this.terminal.sendMessage(this.translate.instant('prompt.welcome_message'));
    }
  }

  handleKeyboardEvent(event: KeyboardEvent) {
    const key = event.key;
    // switch (key) {
    //   case 'ArrowUp':
    //     if (this.historyIndex <= 0) {
    //       return;
    //     }
    //     this.historyIndex--;
    //     console.log(this.historyIndex, this.history[this.historyIndex]);
    //     break;
    //   case 'ArrowDown':
    //     if (this.historyIndex >= this.history.length - 1) {
    //       return;
    //     }
    //     this.historyIndex++;
    //     console.log(this.historyIndex, this.history[this.historyIndex]);
    //     break;
    // }
  }

}
