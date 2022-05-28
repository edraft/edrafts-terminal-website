import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TerminalContentElement as TerminalHistoryElement } from '../model/terminal-content-element';

@Injectable({
  providedIn: 'root'
})
export class TerminalService {

  commandHandler: EventEmitter<string> = new EventEmitter<string>();
  terminalContent$: BehaviorSubject<TerminalHistoryElement[]> = new BehaviorSubject<TerminalHistoryElement[]>([]);
  terminalHistory: string[] = [];

  constructor() { }

  sendCommand(command: string) {
    this.terminalHistory.push(command);
    this.commandHandler.emit(command);
  }

  sendResponse(command: string, response: string) {
    this.terminalContent$.value.push({command, response});
  }

  sendMessage(message: string) {
    this.terminalContent$.value[this.terminalContent$.value.length - 1].message = message;
  }

  clear() {
    this.terminalContent$.next([]);
  }
}
