import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { ConfigService } from '../../../../../services/config/config.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  @Input() values: string[] = [];
  lang: string = '';
  langNotFound = false;

  constructor(
    private translate: TranslateService,
    private primeNGConfig: PrimeNGConfig,
    private configService: ConfigService
  ) {}

  ngOnInit() {
    if (this.values.length === 0) {
      return;
    }
    let language = this.values[0];

    if (!this.translate.getLangs().includes(language)) {
      this.langNotFound = true;
      return;
    }

    if (this.langNotFound) {
      this.langNotFound = false;
    }
    this.translate.resetLang(language);
    this.translate.reloadLang(language);

    this.translate.use(language);
    this.translate.get('primeng').subscribe(res => this.primeNGConfig.setTranslation(res));
    this.lang = language;
  }

}
