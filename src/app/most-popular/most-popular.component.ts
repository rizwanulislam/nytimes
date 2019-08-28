import { Component, OnInit } from '@angular/core';
import { NytApiService } from '../nyt-api.service';

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.scss']
})
export class MostPopularComponent implements OnInit {
  articles: Array<any>;
  constructor( private newsApi: NytApiService) { }

  ngOnInit() {
    this.newsApi.mostPopularArticles().subscribe(data => {
      this.articles = data['results'];
      console.log(this.articles);
      this.articles.forEach(art => {
        // console.log(typeof(art.published_date))
        art.imageSource = art.media[0]['media-metadata'][2]['url'];
      // console.log(art.imageSource);
    });
    });
  }

}
