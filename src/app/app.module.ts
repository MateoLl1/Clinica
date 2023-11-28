import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//* Rutas
import { APP_ROUTING } from './app.routes';

//* Pipes

// * Componenets
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { FacebookComponent } from './components/shared/icons/facebook/facebook.component';
import { InstagramComponent } from './components/shared/icons/instagram/instagram.component';
import { TwitterComponent } from './components/shared/icons/twitter/twitter.component';
import { YouTubeComponent } from './components/shared/icons/you-tube/you-tube.component';

//* Service
import { HttpClientModule } from '@angular/common/http';
import { ImagenService } from './services/imagen.service';
import { HomeComponent } from './components/home/home.component';
import { PublicidadComponent } from './components/shared/publicidad/publicidad.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { SliderComponent } from './components/slider/slider.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FacebookComponent,
    InstagramComponent,
    TwitterComponent,
    YouTubeComponent,
    HomeComponent,
    PublicidadComponent,
    NosotrosComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [ImagenService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
