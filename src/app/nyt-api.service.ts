import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NytApiService {
  apiKey = '5STw7M4C5v6e6heVnDgpKGP33Aa0WnAI';
  constructor(private http: HttpClient) { }

  mostPopularArticles(): Observable<Object> {
    const url = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=' + this.apiKey;
    return this.http.get<Object>(url);
  }
  topStories(choice): Observable<Object> {
    // console.log(choice);
    const topStoryCriteria = choice;
    const url = 'https://api.nytimes.com/svc/topstories/v2/' + topStoryCriteria +'.json?api-key='+this.apiKey;
    return this.http.get<Object>(url);
  }

  searchArticles(searchOption): Observable<Object> {
    const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+ searchOption + '&api-key=' + this.apiKey;
    console.log(url);
    return this.http.get<Object>(url);
  }
}
