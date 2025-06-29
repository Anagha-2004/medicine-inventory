import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Medicine {
  _id?: string;
  name: string;
  quantity: number;
  expiryDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  private apiUrl = 'http://localhost:3000/medicines'; // Adjust if your backend uses another port

  constructor(private http: HttpClient) {}

  getMedicines(): Observable<Medicine[]> {
    return this.http.get<Medicine[]>(this.apiUrl);
  }

  addMedicine(medicine: Medicine): Observable<Medicine> {
    return this.http.post<Medicine>(this.apiUrl, medicine);
  }

  deleteMedicine(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
