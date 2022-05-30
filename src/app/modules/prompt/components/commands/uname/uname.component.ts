import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../../../services/config/config.service';

@Component({
  selector: 'app-uname',
  templateUrl: './uname.component.html',
  styleUrls: ['./uname.component.scss']
})
export class UnameComponent implements OnInit {

  uname: string = '';

  constructor(
    private configService: ConfigService
  ) { }

  ngOnInit(): void {
    this.uname = this.configService.getConfig().uname;
  }

}
