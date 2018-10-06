import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CartModule } from './cart/cart.module';
import { ProdListModule } from './prod-list/prod-list.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CartModule,
    ProdListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
