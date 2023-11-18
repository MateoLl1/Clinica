import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// * Componenets
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

//* Service
import { ImagenService } from './services/imagen.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ImagenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
