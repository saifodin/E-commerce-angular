import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './home/hero/hero.component';
import { BannerComponent } from './home/banner/banner.component';
import { ProductsComponent } from './home/products/products.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { FooterComponent } from './footer/footer.component';
import { InstagramComponent } from './home/instagram/instagram.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { HeaderComponent } from './header/header.component';
import { ShopDeatilsComponent } from './shop-deatils/shop-deatils.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroComponent,
    BannerComponent,
    ProductsComponent,
    ProductCartComponent,
    FooterComponent,
    InstagramComponent,
    CategoriesComponent,
    HeaderComponent,
    ShopDeatilsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
