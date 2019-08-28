import { Component, OnInit } from '@angular/core';
import { NytApiService } from '../nyt-api.service';

@Component({
  selector: 'app-search-article',
  templateUrl: './search-article.component.html',
  styleUrls: ['./search-article.component.scss']
})
export class SearchArticleComponent implements OnInit {
  articles: Array<any>;
  searchOption: string = '';

  constructor(private newsApi: NytApiService) { }

  ngOnInit() {
  }

  searchArticle(){
    console.log(this.searchOption);
    this.newsApi.searchArticles(this.searchOption).subscribe(data => {
      // console.log(data);
      this.articles = data['response']['docs'];
      this.articles.forEach(art => {
        if(art.multimedia != ""){
          art.imageSource = "https://static01.nyt.com/"+art.multimedia[1]['url'];
        }
        else{
          // console.log("here");
          art.imageSource = 'assets/default_img_thumb.png';
        }
      });
      console.log(this.articles);
      });
  }

}
