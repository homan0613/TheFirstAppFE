import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ListAccountComponent } from './components/list-account/list-account.component';
import { ListAccountFormComponent } from './components/list-account/list-account-form/list-account-form.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { SignUpFormComponent } from './components/sign-up/sign-up-form/sign-up-form.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HistoryComponent } from './components/history/history.component';
import { NewsComponent } from './components/news/news.component';
import { SentenceComponent } from './components/sentence/sentence.component';
import { PhraseComponent } from './components/phrase/phrase.component';
import { LeftsideComponent } from './components/leftside/leftside.component';
import { ExampleComponent } from './components/example/example.component';
import { StoryIndexComponent } from './components/stories/story-index/story-index.component';
import { StoryDetailComponent } from './components/stories/story-detail/story-detail.component';
import { TestIndexComponent } from './components/test/test-index/test-index.component';
import { TestDetailComponent } from './components/test/test-detail/test-detail.component';
import { JwtModule } from '@auth0/angular-jwt';
import { ImageComponent } from './components/image/image.component';
import { SpeakTestComponent } from './components/speak-test/speak-test.component';
import { ChatComponent } from './components/chat/chat.component';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    SignUpComponent,
    SignUpFormComponent,
    ListAccountComponent,
    ListAccountFormComponent,
    HeaderComponent,
    FooterComponent,
    HistoryComponent,
    NewsComponent,
    SentenceComponent,
    PhraseComponent,
    LeftsideComponent,
    ExampleComponent,
    StoryIndexComponent,
    StoryDetailComponent,
    TestIndexComponent,
    TestDetailComponent,
    ImageComponent,
    SpeakTestComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:5000"],
        blacklistedRoutes: []
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
