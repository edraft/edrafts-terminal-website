import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TerminalService {

  constructor() { }

  sendCommand(command: string) {}

  printCommand(command: string) {}

  print(text: string) {}
}
