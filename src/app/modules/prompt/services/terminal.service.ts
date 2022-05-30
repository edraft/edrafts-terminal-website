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

  sendCommand(commandString: string, hidePrompt: boolean = false) {
    let command: string = commandString;
    let values: string[] = [];

    if (commandString.includes(' ')) {
      command = commandString.split(' ')[0];
      values = commandString.split(' ');
      values.shift();
    }

    let commandModel = { command, values, response: '', hidePrompt };
    const list = Object.assign([], this.terminalHistory$.value);
    list.push(commandModel);
    this.terminalHistory$.next(list);
    this.commandHandler.emit(commandModel);
  }

  clear() {
    this.terminalHistory$.next([]);
  }
}
