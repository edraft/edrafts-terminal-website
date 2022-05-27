import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TerminalService } from 'primeng/terminal';

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
    banner\t\t${this.translate.instant('prompt.commands.banner.help')}
    clear\t\t${this.translate.instant('prompt.commands.clear.help')}
    help\t\t${this.translate.instant('prompt.commands.help.help')}
    history\t\t${this.translate.instant('prompt.commands.history.help')}
    language\t${this.translate.instant('prompt.commands.language.help')}
    `;
    this.terminal.sendResponse(help);
  }

  help(): void { }
}
