import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaPcComponent } from './carta-pc/carta-pc.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'carta', component: CartaPcComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

