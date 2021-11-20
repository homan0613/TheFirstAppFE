import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { ListAccountComponent } from './components/list-account/list-account.component';
import { HistoryComponent } from './components/history/history.component';
import { StoryIndexComponent } from './components/stories/story-index/story-index.component';
import { StoryDetailComponent } from './components/stories/story-detail/story-detail.component';
import { AuthGuardService } from './services/auth-guard.service';
import { TestDetailComponent } from './components/test/test-detail/test-detail.component';
import { SpeakTestComponent } from './components/speak-test/speak-test.component';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	// { path:'check', component: LoginComponent },
	{ path:'login', component: LoginComponent },
	{ path:'signup', component: SignUpComponent },
	{ path:'listAccount', component: ListAccountComponent },
	{ path:'history/:id', component: HistoryComponent },
	{ path:'stories', component: StoryIndexComponent,  canActivate: [AuthGuardService]},
	{ path:'stories/detail/:id', component: StoryDetailComponent },
	{ path:'stories/test/:id', component: TestDetailComponent },
	{ path:'stories/speaktest', component: SpeakTestComponent },
	{ path:'chat', component: ChatComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }