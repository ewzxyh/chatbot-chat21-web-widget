import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AppConfigService } from '../providers/app-config.service';
import { AuthService } from '../providers/auth.service';

@Injectable()
export class SettingsService {

  constructor(
    public http: Http,
    public appConfigService: AppConfigService,
    public authService: AuthService
  ) { }

  getProjectById(id: string): Observable<any[]> {
    // tslint:disable-next-line:max-line-length
    const token = 'JWT [REDACTED_JWT]';
    const API_URL = this.appConfigService.getConfig().apiUrl;
    const PROJECT_BASE_URL = API_URL + 'projects/';
    const url = PROJECT_BASE_URL + id;
    console.log('!!! GET PROJECT BY ID URL', url);
    console.log('!!! GET ID', id);
    console.log('!!! GET TOKEN', token);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.http
      .get(url, { headers })
      .map((response) => response.json());
  }
}
