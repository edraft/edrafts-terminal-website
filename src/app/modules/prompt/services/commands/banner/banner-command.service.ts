import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from '../../../../../services/config/config.service';
import { TerminalService } from '../../terminal.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class BannerCommandService {

  constructor(
    private terminalService: TerminalService,
    private translate: TranslateService,
    private config: ConfigService
  ) { }

  banner() {
    let birthdate = this.config.getConfig().birthdate;
    const age = Math.floor(moment(new Date()).diff(moment(birthdate, "DD.MM.YYYY"), 'years', true));
    let banner = `
                        <span class="important-text">${this.config.getConfig().mail}</span>
                        ---------------------------
                        <span class="important-text">${this.translate.instant('prompt.commands.banner.name')}</span>: Sven Heidemann
    <span class="important-text">        ((</span>          <span class="important-text">${this.translate.instant('prompt.commands.banner.age')}</span>: ${age}
    <span class="important-text">        ( \`)</span>        <span class="important-text">${this.translate.instant('prompt.commands.banner.job')}</span>: ${this.translate.instant('prompt.commands.banner.job_value')}
    <span class="important-text">        ; / ,</span>       <span class="important-text">Python</span></span>: ${this.translate.instant('prompt.commands.banner.very_good')}
    <span class="important-text">       /  \/</span>         <span class="important-text">Angular</span>: ${this.translate.instant('prompt.commands.banner.good')}
    <span class="important-text">      /  |</span>          <span class="important-text">.NET</span>: ${this.translate.instant('prompt.commands.banner.good')}
    <span class="important-text">     /  ~/</span>          <span class="important-text">Linux</span>: ${this.translate.instant('prompt.commands.banner.very_good')}
    <span class="important-text">    / )  )</span>          <span class="important-text">Windows</span>: ${this.translate.instant('prompt.commands.banner.very_good')}
    <span class="important-text">___// | /</span>           <span class="important-text">Mac</span>: ${this.translate.instant('prompt.commands.banner.bad')}
    <span class="important-text">\`--'  \_~-,</span>          <span class="important-text">Gitea</span>: <a href="${this.config.getConfig().gitea}" target="_blank">${this.config.getConfig().gitea}</a>
                        <span class="important-text">Github</span>: <a href="${this.config.getConfig().github}" target="_blank">${this.config.getConfig().github}</a>
                        <span class="important-text">Discord</span>: <a href="${this.config.getConfig().discord}" target="_blank">${this.config.getConfig().discord}</a>
                        <span class="important-text">Mail</span>: <a href="${this.config.getConfig().mail}" target="_blank">mailto:${this.config.getConfig().mail}</a>
    `;
    this.terminalService.sendResponse('banner', banner);
  }
}
