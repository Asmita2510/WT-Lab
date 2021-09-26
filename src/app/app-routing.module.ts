import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [{
  path:'',redirectTo:'Login', pathMatch:'full'
},
{
  path:'About',component:AboutComponent
},
{
  path:'Login',component:LoginComponent
},
{
  path:'Gallery',component:GalleryComponent
},
{
  path:'Product',component:ProductComponent
},
{
  path:'Contact',component:ContactComponent
},
{path:'**',component:PagenotfoundComponent
}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
