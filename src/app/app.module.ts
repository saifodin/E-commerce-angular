import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './home/hero/hero.component';
import { BannerComponent } from './home/banner/banner.component';
import { ProductsComponent } from './home/products/products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FooterComponent } from './footer/footer.component';
import { InstagramComponent } from './home/instagram/instagram.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { HeaderComponent } from './header/header.component';
import { ShopDeatilsComponent } from './shop-deatils/shop-deatils.component';
import { ShopComponent } from './shop/shop.component';
import { BreadcrumbComponent } from './shop/breadcrumb/breadcrumb.component';
import { ShopAccordingComponent } from './shop/shop-according/shop-according.component';
import { ShopProductsComponent } from './shop/shop-products/shop-products.component';
import { ProductOptionComponent } from './shop/product-option/product-option.component';
import { ProductPaginationComponent } from './shop/product-pagination/product-pagination.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { BlogComponent } from './blog/blog.component';
import { BackgroundImageComponent } from './blog/background-image/background-image.component';
import { DetailsComponent } from './blog/details/details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './shopping-cart/product-list/product-list.component';
import { ProductComponent } from './shopping-cart/product-list/product/product.component';
import { CartTotalComponent } from './shopping-cart/cart-total/cart-total.component';
import { LogoutComponent } from './logout/logout.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroComponent,
    BannerComponent,
    ProductsComponent,
    ProductCardComponent,
    FooterComponent,
    InstagramComponent,
    CategoriesComponent,
    HeaderComponent,
    ShopDeatilsComponent,
    ShopComponent,
    BreadcrumbComponent,
    ShopAccordingComponent,
    ShopProductsComponent,
    ProductOptionComponent,
    ProductPaginationComponent,
    ShoppingCartComponent,
    BlogComponent,
    BackgroundImageComponent,
    DetailsComponent,
    RegisterComponent,
    LoginComponent,
    ProductListComponent,
    ProductComponent,
    CartTotalComponent,
    LogoutComponent,
    FavoriteListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }