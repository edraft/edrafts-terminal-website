import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TerminalContentElement } from '../../model/terminal-content-element';
import { TerminalService } from '../../services/terminal.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {

  @Input() welcomeMessage: string | undefined;
  @Input() prompt: string | undefined;
  @Input() path: string | undefined;

  commandForm: FormGroup = this.formBuilder.group({
    command: [''],
  });

  terminalContent: TerminalContentElement[] = [];

  constructor(
    private terminalService: TerminalService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initCommandForm();
    this.terminalService.responseHandler.subscribe(response => {
      this.terminalContent.push(response);
    })
  }

  initCommandForm(): void {
    this.commandForm = this.formBuilder.group({
      command: [''],
    });
  }

  submit(): void {
    const value = this.commandForm.controls['command'].value;
    if (value == "") {
      return;
    }
    this.terminalService.sendCommand(value);
    this.commandForm.controls['command'].setValue('');
  }

}
