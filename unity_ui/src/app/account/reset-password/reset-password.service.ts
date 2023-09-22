import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  private resetPasswordUrl = '/api/reset-password';

  constructor(private http: HttpClient) { }

  resetPassword(email: string, newPassword: string): Observable<any> {
    const body = { email, newPassword };
    return this.http.post<any>(this.resetPasswordUrl, body);
  }
}
