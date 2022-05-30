import { Component, OnInit } from '@angular/core';
import { TerminalCommand } from '../../../model/terminal-command';
import { TerminalService } from '../../../services/terminal.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  terminalHistory: TerminalCommand[] = [];

  constructor(
    private terminal: TerminalService
  ) { }

  ngOnInit(): void {
    this.terminalHistory =  Object.assign([], this.terminal.terminalHistory$.value);
  }

}
