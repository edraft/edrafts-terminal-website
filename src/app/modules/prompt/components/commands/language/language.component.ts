import { ChangeDetectorRef, Component, Input, NgZone, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { TerminalService } from '../../../services/terminal.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  @Input() values: string[] = [];
  lang: string = '';

  constructor(
    private terminal: TerminalService,
    private translate: TranslateService,
    private primeNGConfig: PrimeNGConfig
  ) {
  }

  ngOnInit() {
    if (this.values.length === 0) {
      return;
    }
    let language = this.values[0];

    if (!this.translate.getLangs().includes(language)) {
      return;
    }
    this.translate.use(language);
    this.translate.get('primeng').subscribe(res => this.primeNGConfig.setTranslation(res));
    this.lang = language;
  }

}
