import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CartModule } from './cart/cart.module';
import { ProdListModule } from './prod-list/prod-list.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProdListComponent } from './prod-list/prod-list/prod-list.component';
import { CartComponent } from './cart/cart/cart.component';
import { NavComponent } from './nav/nav.component';

const routes = [
  { path: '', component: ProdListComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CartModule,
    ProdListModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
