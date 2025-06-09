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
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingTostarsPipe } from './pipes/rating-tostars-pipe';

@NgModule({
  declarations: [
    App,
    FooterComponent,
    NavbarComponent,
    ProductsComponent,
    ProductFilterPipe,
    ProductDetailsComponent,
    CartComponent,
    RatingTostarsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    ProductService,
    [provideHttpClient()],
  ],
  bootstrap: [App]
})
export class AppModule { }
