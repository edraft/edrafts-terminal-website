import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { TerminalService } from '../../terminal.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageCommandService {

  constructor(
    private translate: TranslateService,
    private terminal: TerminalService,
    private primeNGConfig: PrimeNGConfig
  ) { }

  language(language: string | null) {
    if (!language) {
      this.terminal.sendError('language', this.translate.instant('prompt.commands.language.missing_value'));
      return;
    }
    
    if (!this.translate.getLangs().includes(language)) {
      this.terminal.sendError('language', this.translate.instant('prompt.commands.language.not_found'));
      return;
    }
    this.translate.use(language);
    this.translate.get('primeng').subscribe(res => this.primeNGConfig.setTranslation(res));

    let response = `
    ${language}
    `;
    this.terminal.sendResponse(`language ${language}`, response);
  }
}
