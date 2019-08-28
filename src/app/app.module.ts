import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatGridListModule, MatSelectModule, MatCardModule, MatMenuModule, 
  MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatFormFieldModule, MatInputModule  } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { SearchArticleComponent } from './search-article/search-article.component';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MostPopularComponent,
    SearchArticleComponent,
    TopStoriesComponent,
    SearchDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
