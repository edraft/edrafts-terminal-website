import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TerminalCommand } from '../../model/terminal-command';
import { TerminalService } from '../../services/terminal.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {

  @Input() welcomeMessage: string | undefined;
  @Input() host: string | undefined;
  @Input() path: string | undefined;

  commandForm: FormGroup = this.formBuilder.group({
    command: [''],
  });

  terminalContent: TerminalCommand[] = [];

  constructor(
    private terminalService: TerminalService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initCommandForm();

    this.terminalService.terminalHistory$.subscribe(terminalContent => {
      this.terminalContent = terminalContent
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
    this.terminalService.sendCommand(command);
    this.commandForm.controls['command'].setValue('');
  }

}
