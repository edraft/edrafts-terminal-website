import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TerminalCommand } from '../model/terminal-command';

@Injectable({
  providedIn: 'root'
})
export class TerminalService {

  commandHandler: EventEmitter<TerminalCommand> = new EventEmitter<TerminalCommand>();
  terminalHistory$: BehaviorSubject<TerminalCommand[]> = new BehaviorSubject<TerminalCommand[]>([]);

  constructor() { }

  sendCommand(commandString: string) {
    let command: string = commandString;
    let values: string[] = [];

    if (commandString.includes(' ')) {
      command = commandString.split(' ')[0];
      values = commandString.split(' ');
      values.shift();
    }

    let commandModel = { command, values, response: '' };
    this.terminalHistory$.value.push(commandModel);
    this.commandHandler.emit(commandModel);
  }

  sendResponse(command: string, response: string) {
    this.terminalHistory$.value.push({ command, values: [], response });
  }

  sendError(command: string, error: string) {
    this.terminalHistory$.value.push({ command, values: [], response: error });
  }

  clear() {
    this.terminalHistory$.next([]);
  }
}
