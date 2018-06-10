import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { HomeComponent } from './home/home.component';
import { PoojasComponent } from './home/poojas/poojas.component';
import { PoojasdescriptionComponent } from './home/poojas/poojasdescription/poojasdescription.component';
import { PoojasiteamsComponent } from './home/poojas/poojasiteams/poojasiteams.component';
import { PoojasiteamComponent } from './home/poojas/poojasiteams/poojasiteam/poojasiteam.component';
import { PunyakeshtramsComponent } from './home/punyakeshtrams/punyakeshtrams.component';
import { PunyakeshtramdescriptionComponent } from './home/punyakeshtrams/punyakeshtramdescription/punyakeshtramdescription.component';
import { PunyakeshtramiteamsComponent } from './home/punyakeshtrams/punyakeshtramiteams/punyakeshtramiteams.component';
import { PunyakeshtramiteamComponent } from './home/punyakeshtrams/punyakeshtramiteams/punyakeshtramiteam/punyakeshtramiteam.component';
import { SliderComponent } from './home/slider/slider.component';

import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import {Routes,RouterModule} from '@angular/router';
import { TopheaderComponent } from './topheader/topheader.component';
import { RegisterPurohithComponent } from './register-purohith/register-purohith.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './profile/update-profile/update-profile.component';
import { MyordersComponent } from './profile/myorders/myorders.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { Footer2Component } from './footer2/footer2.component';


import { ForgotPwdComponent } from './login/forgot-pwd/forgot-pwd.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ContactComponent } from './contactus/contact/contact.component';
import { LocationComponent } from './contactus/location/location.component';
import { GetInTouchComponent } from './contactus/get-in-touch/get-in-touch.component';


import { PunyakshetramCategoriesComponent } from './punyakshetram-categories/punyakshetram-categories.component';
import { AllPunyakshetramCategoriesComponent } from './punyakshetram-categories/all-punyakshetram-categories/all-punyakshetram-categories.component';
import { AllPunyakshetramCategoryItemsComponent } from './punyakshetram-categories/all-punyakshetram-categories/all-punyakshetram-category-items/all-punyakshetram-category-items.component';
import { AllPunyakshetramCategoryItemComponent } from './punyakshetram-categories/all-punyakshetram-categories/all-punyakshetram-category-items/all-punyakshetram-category-item/all-punyakshetram-category-item.component';
import { RiverItemsComponent } from './punyakshetram-categories/all-punyakshetram-categories/river-items/river-items.component';
import { RiverItemComponent } from './punyakshetram-categories/all-punyakshetram-categories/river-items/river-item/river-item.component';
import { ShaktipeetamsItemsComponent } from './punyakshetram-categories/all-punyakshetram-categories/shaktipeetams-items/shaktipeetams-items.component';
import { ShaktipeetamItemComponent } from './punyakshetram-categories/all-punyakshetram-categories/shaktipeetams-items/shaktipeetam-item/shaktipeetam-item.component';
import{PoojadetailsComponent} from './poojadetails/poojadetails.component';
import{PunyakshetramdetailsComponent} from './punyakshetramdetails/punyakshetramdetails.component';
import{BooknowComponent} from './booknow/booknow.component';
import {HttpClientModule} from '@angular/common/http';
import { CustomPipe } from './custom.pipe';
import {UserService} from './service/user.service';
//import {PoojasCategoriesComponent} from './poojas-categories/poojas-categories.component';
//import {PoojaCategoryItemComponent} from './poojas-categories/pooja-category-item/pooja-category-item.component';

const approute:Routes=[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'purohith',component:RegisterPurohithComponent},
 
  {path:'orders',component:MyordersComponent},
  {path:'changepwd',component:ChangePasswordComponent},
  {path:'updateprofile',component:UpdateProfileComponent},
  {path:'forgotpwd',component:ForgotPwdComponent},
  {path:'contactus',component:ContactusComponent},

  
  {path:'allpunyakshetrams',component:AllPunyakshetramCategoryItemsComponent},
  {path:'riverpunyakshetrams',component:RiverItemsComponent},
  {path:'shaktipeetams',component:ShaktipeetamsItemsComponent},
  {path:'poojadetails/:poojaid',component:PoojadetailsComponent},
  {path:'punyadetails',component:PunyakshetramdetailsComponent},
  {path:'booknow',component:BooknowComponent},

  {path:'punyakshetramdetails',component:PunyakshetramdetailsComponent},

 // {path:'allcategories',component:PoojasCategoriesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    RegisterComponent,
    TopheaderComponent,
    RegisterPurohithComponent,
    ProfileComponent,
    UpdateProfileComponent,
    MyordersComponent,
    ChangePasswordComponent,
   
    PoojasComponent,
    PoojasdescriptionComponent,
    PoojasiteamsComponent,
    PoojasiteamComponent,
    PunyakeshtramsComponent,
    PunyakeshtramdescriptionComponent,
    PunyakeshtramiteamComponent,
    PunyakeshtramiteamsComponent,
    SliderComponent,
    
    Footer2Component,
    ForgotPwdComponent,
    ContactusComponent,
    ContactComponent,
    LocationComponent,
    GetInTouchComponent,

    
    PunyakshetramCategoriesComponent,
    AllPunyakshetramCategoriesComponent,
    AllPunyakshetramCategoryItemsComponent,
    AllPunyakshetramCategoryItemComponent,
    RiverItemsComponent,
    RiverItemComponent,
    ShaktipeetamsItemsComponent,
    ShaktipeetamItemComponent,
 
    PunyakshetramdetailsComponent,
    PoojadetailsComponent,
    BooknowComponent,
    CustomPipe,
   

   // PoojasCategoriesComponent,
   // PoojaCategoryItemComponent
   
    
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(approute,{useHash:true}),
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
