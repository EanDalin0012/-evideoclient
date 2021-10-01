import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VLayoutComponent } from './layout/v-layout/v-layout.component';
import { LayoutBlankComponent } from './layout/layout-blank/layout-blank.component';
import { VLayoutModule } from './layout/layout.module';
import { VShareModule } from './v-share/v-share/v-share.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AuthInterceptor } from './v-share/service/auth-interceptor.service';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    VLayoutComponent,
    LayoutBlankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VLayoutModule,
    InfiniteScrollModule,
    VShareModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
    }),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
