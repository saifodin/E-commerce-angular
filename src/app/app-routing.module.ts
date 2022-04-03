import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: '', canActivate:[AuthGuard] ,component: HomeComponent },
  { path: 'register'  , component: RegisterComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'shop',canActivate:[AuthGuard] , component: ShopComponent },
  { path: 'shop/:category',canActivate:[AuthGuard] , component: ShopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
