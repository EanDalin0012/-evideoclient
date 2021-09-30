import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LOCAL_STORAGE, LANGUAGE } from './v-share/constants/common.const';
import { Utils } from './v-share/util/utils.static';
import { MyLogUtil } from './v-share/util/my-log-util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'evideoclient';

  constructor(
    private translate: TranslateService) {
    this.setInitialAppLanguage();
  }

  setInitialAppLanguage() {
    const i18n = Utils.getSecureStorage( LOCAL_STORAGE.I18N );
    if ( !i18n ) {
      Utils.setSecureStorage(LOCAL_STORAGE.I18N, LANGUAGE.I18N_EN.toString());
      this.translate.setDefaultLang( LANGUAGE.I18N_EN.toString() );
      MyLogUtil.log('LANGUAGE.I18N_EN.toString()', LANGUAGE.I18N_EN.toString());
      this.translate.use( LANGUAGE.I18N_EN.toString() );
    } else {
      this.translate.setDefaultLang( 'en' );
      this.translate.use( i18n );
    }
  }

}
