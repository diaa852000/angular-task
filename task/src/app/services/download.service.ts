import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileSaverService } from 'ngx-filesaver';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(private http: HttpClient, private fileSaverService: FileSaverService) {}

  downloadFile(url: string, fileName: string, headers?: any, params?: any): Observable<Blob> {
    return this.http.get(url, {
      responseType: 'blob',
      headers: headers,
      params: params
    }).pipe(
      tap(blob => {
        this.fileSaverService.save(blob, fileName);
      }),
      catchError(error => {
        console.error('Download error:', error);
        throw error;
      })
    );
  }
}
