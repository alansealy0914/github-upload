import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sil } from './sil.interface';

@Injectable()
export class SilService {

  constructor(private http: HttpClient) { }
  getSils(): Observable<Sil[]> {
    return this.http.get<Sil[]>('/api/sils');
  }

  getSil(id): Observable<Sil> {
    return this.http.get<Sil>(`/api/sils/${id}`);
  }

  postSil(sil): Promise<any> {
    return this.http
      .post('/api/sils', sil)
      .toPromise()
      .then(data => data);
  }

}


