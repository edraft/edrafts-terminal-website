import { Injectable } from '@angular/core';
import { TerminalService } from '../../terminal.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryCommandService {

  constructor(
    private terminal: TerminalService
  ) { }

  history() {
    let response = '';
    for (let index = 0; index < this.terminal.terminalHistory.length; index++) {
      const element = this.terminal.terminalHistory[index];
      response += `&nbsp;&nbsp;${index + 1}\t${element}\n`;
    }
    this.terminal.sendResponse('history', response);
  }
}
