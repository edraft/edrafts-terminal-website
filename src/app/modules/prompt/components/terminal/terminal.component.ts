import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfigService } from '../../../../services/config/config.service';
import { TerminalCommand } from '../../model/terminal-command';
import { TerminalService } from '../../services/terminal.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {

  welcomeMessage: string = '';
  host: string = 'localhost';
  path: string = '~';
  historyIndex = 0;

  commandForm: FormGroup = this.formBuilder.group({
    command: [''],
  });

  terminalContent: TerminalCommand[] = [];

  constructor(
    private config: ConfigService,
    private terminal: TerminalService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initCommandForm();

    this.terminal.terminalHistory$.subscribe(terminal => {
      console.log('changes',terminal);
      this.terminalContent = terminal;
    });
    this.host = this.config.getConfig().host;
    this.terminal.commandHandler.subscribe(command => {
      switch (command.command) {
        case 'clear':
          this.terminal.clear();
          break;
        default:
          // this.terminal.sendError(command.command, 'prompt.command_not_found');
          break;
      }
    });
  }

  initCommandForm(): void {
    this.commandForm = this.formBuilder.group({
      command: [''],
    });
  }

  submit(): void {
    let command: string = this.commandForm.controls['command'].value;
    if (!command || command == "") {
      return;
    }
    this.terminal.sendCommand(command);
    this.commandForm.controls['command'].setValue('');
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
