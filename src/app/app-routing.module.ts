import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { SearchArticleComponent } from './search-article/search-article.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/top-stories', pathMatch: 'full' },
  { path: 'most-popular-articles', component: MostPopularComponent },
  { path: 'top-stories', component: TopStoriesComponent },
  { path: 'search', component: SearchArticleComponent },
  { path: 'result/:id', component: SearchDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
