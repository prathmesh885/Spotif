import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArtistComponent } from './add-artist/add-artist.component';
import { ContactComponent } from './Contacts/contact.component'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path:'contact',component:ContactComponent },
  {path:'add-artits',component:AddArtistComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'product',component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
