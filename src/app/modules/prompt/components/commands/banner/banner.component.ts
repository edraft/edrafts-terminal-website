import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ConfigModel } from '../../../../../model/config/config-model';
import { ConfigService } from '../../../../../services/config/config.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  lang: string = '';
  config: ConfigModel = this.configService.getConfig();
  age = Math.floor(moment(new Date()).diff(moment(this.config.birthdate, "DD.MM.YYYY"), 'years', true));

  constructor(
    private configService: ConfigService
  ) { }

  ngOnInit(): void {
  }

}
