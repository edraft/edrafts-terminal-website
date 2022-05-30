import { Injectable } from '@angular/core';
import { TerminalService } from '../../terminal.service';

@Injectable({
  providedIn: 'root'
})
export class ClearCommandService {

  constructor(
    private terminal: TerminalService
  ) { }

  clear() {
    this.terminal.clear();
  }
}
