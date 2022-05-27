import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TerminalContentElement as TerminalHistoryElement } from '../model/terminal-content-element';

@Injectable({
  providedIn: 'root'
})
export class TerminalService {

  commandHandler: EventEmitter<string> = new EventEmitter<string>();
  responseHandler: EventEmitter<TerminalHistoryElement> = new EventEmitter<TerminalHistoryElement>();

  constructor() { }

  sendCommand(command: string) {
    this.commandHandler.emit(command);
  }

  sendResponse(command: string, response: string) {
    this.responseHandler.emit({command, response});
  }

  print(text: string) {
    this.responseHandler.emit({command: '', response: text});
  }
}
