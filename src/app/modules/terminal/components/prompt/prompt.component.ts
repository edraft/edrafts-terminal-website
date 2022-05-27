import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TerminalService } from 'primeng/terminal';
import { ConfigService } from 'src/app/services/config/config.service';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.scss']
})
export class PromptComponent implements OnInit {

  welcomeMessage: string = '';
  prompt: string = 'unkown';

  constructor(
    private translate: TranslateService,
    private config: ConfigService,
    private terminal: TerminalService
  ) { }

  ngOnInit(): void {
    this.prompt = `${this.translate.instant('prompt.visitor')}@${this.config.getConfig().host}:~$ `;

    this.terminal.commandHandler.subscribe(command => {
      let response = '';
      switch (command) {
        default:
          response = `${command}: ${this.translate.instant('prompt.command_not_found')}`
          break;
      }
      this.terminal.sendResponse(response);
  });
  }

}
