import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../../services/config/config.service';
import { ClearCommandService } from '../../services/commands/clear/clear-command.service';
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
  host: string = 'localhost';
  path: string = '~';
  historyIndex = 0;

  constructor(
    private config: ConfigService,
    private terminal: TerminalService,
    private clear: ClearCommandService,
  ) { }

  ngOnInit(): void {
    this.host = this.config.getConfig().host;
    this.terminal.commandHandler.subscribe(command => {
      switch (command.command) {
        case 'clear':
          this.clear.clear();
          break;
        default:
          // this.terminal.sendError(command.command, 'prompt.command_not_found');
          break;
      }
    });
  }

  ngAfterViewInit(): void {
    let commands = this.config.getConfig().startupCommands;
    for (let command of commands) {
      this.terminal.sendCommand(command);
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
