import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckImportsTableComponent } from './pages/check-imports-table/check-imports-table.component';
import { SimpleTableComponent } from './components/simple-table/simple-table.component';
import { PruebaLoginComponent } from './pages/prueba-login/prueba-login.component';
import { GuardGuard } from './pages/prueba-login/coreLogin/guard/guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'loginPrueba', component: PruebaLoginComponent },
  { path: 'check-imports-table', component: CheckImportsTableComponent, canActivate: [GuardGuard] },
  { path: 'simple-table', component: SimpleTableComponent, canActivate: [GuardGuard] },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
