import { NgModule } from '@angular/core';

import { IonicApp, IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Network } from '@ionic-native/network';

import { CongressoApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { MapPage } from '../pages/map/map';
import { SchedulePage } from '../pages/schedule/schedule';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { TabsPage } from '../pages/tabs/tabs';
import { MusicListPage } from '../pages/music-list/music-list';
import { MusicDetailPage } from '../pages/music-detail/music-detail';
import { ModalTonePage } from '../pages/modal-tone/modal-tone';
import { SeminarListPage } from '../pages/seminar-list/seminar-list';
import { GameListPage } from '../pages/game-list/game-list';

import { ProdutosProvider } from '../providers/produtos/produtos';
import { ProgramacaoProvider } from '../providers/programacao/programacao';
import { PalestrantesProvider } from '../providers/palestrantes/palestrantes';
import { MusicasProvider } from '../providers/musicas/musicas';
import { TonsProvider } from '../providers/tons/tons';
import { SeminariosProvider } from '../providers/seminarios/seminarios';

import { SeminariosComponent } from '../components/seminarios/seminarios';
import { HorasProvider } from '../providers/horas/horas';


@NgModule({
  declarations: [
    CongressoApp,
    AboutPage,
    MapPage,
    SchedulePage,
    SessionDetailPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    MusicListPage,
    MusicDetailPage,
    ModalTonePage,
    SeminarListPage,
    SeminariosComponent,
    GameListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(CongressoApp , { backButtonText: '', /* mode: 'ios' */ } )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CongressoApp,
    AboutPage,
    MapPage,
    SchedulePage,
    SessionDetailPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    MusicListPage,
    MusicDetailPage,
    ModalTonePage,
    SeminarListPage,
    GameListPage
  ],
  providers: [
    SplashScreen,
    InAppBrowser,
    ProdutosProvider,
    ProgramacaoProvider,
    PalestrantesProvider,
    MusicasProvider,
    TonsProvider,
    SeminariosProvider,
    HorasProvider,
    Network
  ]
})
export class AppModule { }
