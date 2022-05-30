import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfigService } from '../../../../services/config/config.service';
import { TerminalCommand } from '../../model/terminal-command';
import { TerminalService } from '../../services/terminal.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss'],
  host: {
    '(document:keydown.ArrowDown)': 'onArrowDown()',
    '(document:keydown.ArrowUp)': 'onArrowUp()'
  }
})
export class TerminalComponent implements OnInit {

  welcomeMessage: string = '';
  host: string = 'localhost';
  uname: string = 'localhost';
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
      this.terminalContent = terminal;
    });
    this.host = this.config.getConfig().host;
    this.uname = this.config.getConfig().uname;
    this.terminal.commandHandler.subscribe(command => {
      this.historyIndex = this.terminal.terminalHistory$.value.length;
      switch (command.command) {
        case 'clear':
          this.terminal.clear();
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
    this.config.getConfig().startupCommandsBeforePrompt.forEach(command => {
      this.terminal.sendCommand(command, true);
    });
    this.config.getConfig().startupCommands.forEach(command => {
      this.terminal.sendCommand(command);
    });
  }

  onArrowUp() {
    const history = this.terminal.terminalHistory$.value;
    if (this.historyIndex < 0) {
      return;
    }

    if (this.historyIndex - 1 < 0) {
      return;
    }
    this.historyIndex--;
    const value = `${history[this.historyIndex].command} ${history[this.historyIndex].values}`
    this.commandForm.controls['command'].setValue(value);

  }

  onArrowDown() {
    const history = this.terminal.terminalHistory$.value;
    if (this.historyIndex > history.length - 1) {
      return;
    }

    if (this.historyIndex + 1 > history.length - 1) {
      return;
    }
    this.historyIndex++;
    const value = `${history[this.historyIndex].command} ${history[this.historyIndex].values}`
    this.commandForm.controls['command'].setValue(value);

  }

}
