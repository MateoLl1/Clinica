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
import { HomeComponent } from './components/home/home.component';
import { PublicidadComponent } from './components/shared/publicidad/publicidad.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { SliderComponent } from './components/slider/slider.component';
import { AccessComponent } from './components/access/access.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//* Service
import { HttpClientModule } from '@angular/common/http';
import { ImagenService } from './services/imagen.service';
import { FormsModule } from '@angular/forms';
import { AppThemeService } from './services/app-theme.service';
import { ImageFileComponent } from './components/shared/image-file/image-file.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { TpEmpleadosFormComponent } from './components/tp-empleados-form/tp-empleados-form.component';

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
    AccessComponent,
    ImageFileComponent,
    LoginComponent,
    AdminComponent,
    TpEmpleadosFormComponent,
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ImagenService,AppThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
