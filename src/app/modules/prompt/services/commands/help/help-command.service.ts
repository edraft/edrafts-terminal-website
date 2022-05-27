import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TerminalService } from '../../terminal.service';

@Injectable()
export class HelpCommandService {

  constructor(
    private translate: TranslateService,
    private terminal: TerminalService
  ) {
  }

  run(): void {
    console.log('CMD: help');
    let help = `
    banner    ${this.translate.instant('prompt.commands.banner.help')}
    clear     ${this.translate.instant('prompt.commands.clear.help')}
    help      ${this.translate.instant('prompt.commands.help.help')}
    history   ${this.translate.instant('prompt.commands.history.help')}
    language  ${this.translate.instant('prompt.commands.language.help')}
    `;
    this.terminal.sendResponse('help', help);
  }

  help(): void { }
}
