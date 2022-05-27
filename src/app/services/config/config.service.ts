import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ConfigModel } from 'src/app/model/config/config-model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config: ConfigModel | undefined;

  constructor(private http: HttpClient) { }
  
  loadSettings(): Promise<ConfigModel> {
    return new Promise((resolve, reject) => {
      this.http.get<ConfigModel>('../../assets/config.json')
        .pipe(catchError(error => {
          reject(error);
          return throwError(() => error);
        })).subscribe(config => {
          this.config = config;
          resolve(config);
        });
    });
  }

  public getConfig(): ConfigModel {
    if (!this.config) {
      throw new Error('Config is not set!');
    }
    return this.config;
  }
}

