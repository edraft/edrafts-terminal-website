import { Injectable } from '@angular/core';
import { TerminalService } from '../../terminal.service';

@Injectable({
  providedIn: 'root'
})
export class ClearCommandService {

  constructor(private terminalService: TerminalService) { }

  clear() {
    this.terminalService.clear();
  }
}
