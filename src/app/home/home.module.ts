import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VHomeComponent } from './v-home/v-home.component';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { VShareModule } from '../v-share/v-share/v-share.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ViewHomeComponent } from './view-home/view-home.component';
import { VideoComponent } from './video/video.component';
import { VideoSidebarComponent } from './video-sidebar/video-sidebar.component';


@NgModule({
  declarations: [
    VHomeComponent,
    HomeComponent,
    ViewHomeComponent,
    VideoComponent,
    VideoSidebarComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    HomeRoutingModule,
    VShareModule
  ],
  exports: [
    InfiniteScrollModule,
    VideoComponent,
    VideoSidebarComponent
  ]
})
export class HomeModule { }
