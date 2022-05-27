import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from './services/config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private configService: ConfigService
  ) { }

  ngOnInit(): void {
    this.translate.setDefaultLang(this.configService.getConfig().defaultLanguage);
    this.translate.use(this.configService.getConfig().defaultLanguage);
  }

}
