import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AkService {
  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  getname(): any {
    throw new Error('Method not implemented.');
  }
  isLoggedIn
    () {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }
  getSongs() {
    let url = "http://localhost:3000/song/toptensongs";
    return this.http.get(url);
  }
  createLList(user) {
    let url = `http://localhost:3000/artist/createartist`
    return this.http.post(url, user);
  }

  addsong(user: any) {
    let url = "http://localhost:3000/song/createsong";
    return this.http.post(url, user)
  }
  topList(user: any) {
    let url = "http://localhost:3000/artist/toptenartist";
    return this.http.get(url, user)
  }
}
