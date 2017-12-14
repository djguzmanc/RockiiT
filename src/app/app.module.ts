import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';

import { MatDialogModule, MatInputModule, MatButtonModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/landing/footer/footer.component';
import { TimelineComponent } from './components/landing/timeline/timeline.component';

import { HorizontalTimelineComponent } from './components/horizontal-timeline/horizontal-timeline.component';
import { SignUpComponent } from './components/landing/sign-up/sign-up.component';
import { SignInComponent } from './components/landing/sign-in/sign-in.component';
import { LandingComponent } from './components/landing/landing/landing.component';
import { HistoryWallComponent } from './components/history-wall/history-wall.component';
import { PostExpComponent } from './components/landing/post-exp/post-exp.component';
import { PostInfoComponent } from './components/post-info/post-info.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'history/:year',
    component: HistoryWallComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    TimelineComponent,
    HorizontalTimelineComponent,
    SignUpComponent,
    SignInComponent,
    LandingComponent,
    HistoryWallComponent,
    PostExpComponent,
    PostInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forRoot( appRoutes )
  ],

  entryComponents: [
    SignUpComponent,
    SignInComponent,
    PostExpComponent,
    PostInfoComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
