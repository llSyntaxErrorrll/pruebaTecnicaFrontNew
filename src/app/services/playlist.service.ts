import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Utils } from '../common/util'
import { Playlist } from '../models/playlist';

@Injectable({
	providedIn: 'root'
})
export class PlaylistService {


	private path = Utils.url + "playlist/"

	constructor(private http: HttpClient) { }

	getFindAll(): Observable<Playlist[]> {
		return this.http.get<Playlist[]>(this.path + 'lists');
	}

  getFind(listName: String): Observable<Playlist> {
    return this.http.get<Playlist>(this.path + 'lists/'+listName);
  }

	postSave(product:Playlist): Observable<Playlist> {
		return this.http.post<Playlist>(this.path + 'lists', product);
	}

	deletePoduct(listName: String): Observable<any> {
		return this.http.delete<any>(this.path + 'lists/' + listName);
	}
}
