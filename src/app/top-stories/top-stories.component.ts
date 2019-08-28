import { Component, OnInit } from '@angular/core';
import { NytApiService } from '../nyt-api.service';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.scss']
})
export class TopStoriesComponent implements OnInit {
  articles: Array<any>;
  selectedChoice: any = '';
  searchOption: string = '';

  selectCriteria = {arts: '#3f51b5', automobiles: '#3f51b5', books: '#3f51b5', business: '#3f51b5', 
  fashion: '#3f51b5', food: '#3f51b5', health: '#3f51b5',home: '#3f51b5',insider: '#3f51b5',
  magazine: '#3f51b5',movies: '#3f51b5', national: '#3f51b5',nyregion: '#3f51b5',obituaries: '#3f51b5',
  opinion: '#3f51b5',politics: '#3f51b5',realestate: '#3f51b5',science: '#3f51b5', sports: '#3f51b5',
  sundayreview: '#3f51b5', technology: '#3f51b5', theater: '#3f51b5', tmagazine: '#3f51b5', travel: '#3f51b5',
  upshot: '#3f51b5', world: 'red'};


  constructor(private newsApi: NytApiService) { }

  ngOnInit() {
    this.selectTopStory('world');
  }

  select(choice) {
    for (let c in this.selectCriteria){
      this.selectCriteria[c]="#3f51b5";
    }
    this.selectCriteria[choice] = '#FF4432';
    this.selectTopStory(choice);
  }

  selectTopStory(choice) {
    console.log(choice);
    this.newsApi.topStories(choice).subscribe(data => {
      this.articles = data['results'];
      console.log(this.articles);
      this.articles.forEach(art => {
        if ( art.multimedia !== '') {
          art.imageSource = art.multimedia[4]['url'];
        } else {
          art.imageSource = 'assets/default_img_thumb.png';
        }
      });
    });
  }

  specificNewsSearch() {
    this.newsApi.searchArticles(this.searchOption).subscribe(data => {
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
