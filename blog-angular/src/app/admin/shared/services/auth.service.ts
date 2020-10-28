import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../../shared/interfaces';
import {Observable} from 'rxjs';

@Injectable()

export class AuthService {
  constructor(private http: HttpClient) {
  }

  get token(): string {
    return '';
  }

  private setToken() {

  }

  login(user: User): Observable<any> {
    return this.http.post('', user);
  }

  logout(): void {

  }

  isAutenticated(): boolean {
    return !!this.token;
  }
}
