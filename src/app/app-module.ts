import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductService } from './services/product.service';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ProductFilterPipe } from './pipes/product-filter-pipe';

@NgModule({
  declarations: [
    App,
    FooterComponent,
    NavbarComponent,
    ProductsComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    ProductService,
    [provideHttpClient()],
  ],
  bootstrap: [App]
})
export class AppModule { }
