import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  });;

  constructor(
    private terminalService: TerminalService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initCommandForm();
  }

  initCommandForm(): void {
    this.commandForm = this.formBuilder.group({
      command: [''],
    });
  }

  submit(): void {
    console.log(this.commandForm.controls['command'].value);
  }

}
