import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assignment } from '../models/assignment.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) { }

  baseUrl = 'https://653b530d2e42fd0d54d4eae6.mockapi.io/assignments';

  public getAssignments(): Observable<Assignment[]> {
    return this.httpClient.get<Assignment[]>(this.baseUrl);
  }

  public getAssignment(id: number): Observable<Assignment> {
    return this.httpClient.get<Assignment>(`${this.baseUrl}/${id}`);
  }

  public addAssignment(assignment: Assignment): Observable<Assignment> {
    return this.httpClient.post<Assignment>(`${this.baseUrl}`, assignment);
  }

  public deleteAssignment(id: string): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`, {
      responseType: 'text',
    });
  }

  public putAssignment(id: string, assignment: Assignment): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, assignment);
  }
}
