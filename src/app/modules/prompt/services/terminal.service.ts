import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TerminalContentElement as TerminalHistoryElement } from '../model/terminal-content-element';

@Injectable({
  providedIn: 'root'
})
export class TerminalService {

  commandHandler: EventEmitter<string> = new EventEmitter<string>();
  terminalContent$: BehaviorSubject<TerminalHistoryElement[]> = new BehaviorSubject<TerminalHistoryElement[]>([]);

  constructor() { }

  sendCommand(command: string) {
    this.commandHandler.emit(command);
  }

  sendResponse(command: string, response: string) {
    this.terminalContent$.value.push({command, response});
  }

  clear() {
    this.terminalContent$.next([]);
  }
}
