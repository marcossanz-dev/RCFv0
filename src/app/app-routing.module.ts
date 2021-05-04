import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckImportsTableComponent } from './pages/check-imports-table/check-imports-table.component';
import { SimpleTableComponent } from './components/simple-table/simple-table.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'check-imports-table', component: CheckImportsTableComponent },
  { path: 'simple-table', component: SimpleTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
