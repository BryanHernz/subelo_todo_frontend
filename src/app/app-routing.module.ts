import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ProductComponent } from './modules/product/product.component';
import { OffersComponent } from './modules/offers/offers.component';
import { Offers2Component } from './modules/offers2/offers2.component';
import { HowToSaleComponent } from './modules/sell-steps/how-to-sale/how-to-sale.component';
import { IngressComponent } from './modules/sell-steps/ingress/ingress.component';
import { ProductRegisterComponent } from './modules/sell-steps/product-register/product-register.component';
import { ProductUploadComponent } from './modules/sell-steps/product-upload/product-upload.component';
import { FrequentQuestionsComponent } from './modules/questions/frequent-questions/frequent-questions.component';
import { QuestionComponent } from './modules/questions/question/question.component';
import { InformComponent } from './modules/inform/inform.component';
import { SellerDataComponent } from './modules/seller/personal-data/seller-data/seller-data.component';
import { SellComponent } from './modules/seller/sell/sell.component';
import { SellerPostsComponent } from './modules/seller/posts/seller-posts/seller-posts.component';
import { CompletedSalesComponent } from './modules/seller/completed-sales/completed-sales/completed-sales.component';
import { RejectedSalesComponent } from './modules/seller/rejected-sales/rejected-sales/rejected-sales.component';
import { DeletePostsComponent } from './modules/seller/delete-posts/delete-posts/delete-posts.component';
import { NotificationsComponent } from './modules/seller/notifications/notifications/notifications.component';
import { PaymentsComponent } from './modules/seller/payments/payments/payments.component';
import { AdminDataComponent } from './modules/admin/personal-data/admin-data/admin-data.component';
import { BannersComponent } from './modules/admin/banners/banners/banners.component';
import { BannersHomeComponent } from './modules/admin/banners/banners-home/banners-home.component';
import { BannersCategoriesComponent } from './modules/admin/banners/banners-categories/banners-categories.component';
import { BannersOthersComponent } from './modules/admin/banners/banners-others/banners-others.component';
import { PostsControlComponent } from './modules/admin/posts/posts-control/posts-control/posts-control.component';
import { PostsValidateComponent } from './modules/admin/posts/posts-control/posts-validate/posts-validate.component';
import { SalesRegisterComponent } from './modules/admin/posts/posts-control/sales-register/sales-register.component';
import { CategoriesComponent } from './modules/admin/categories/categories/categories.component';
import { SellersComponent } from './modules/admin/sellers/sellers.component';
import { AdminFrequentQuestionsComponent } from './modules/admin/admin-frequent-questions/admin-frequent-questions/admin-frequent-questions.component';
import { MetricsComponent } from './modules/admin/metrics/metrics.component';
import { AdminNotificationsComponent } from './modules/admin/notifications/admin-notifications/admin-notifications.component';
import { AdminPaymentsComponent } from './modules/admin/payments/admin-payments/admin-payments.component';
import { ShoppingCartComponent } from './modules/shopping-cart/shopping-cart.component';
import { PostTbkComponent } from './shared/post-tbk/post-tbk.component';
import { PurchasesComponent } from './modules/seller/purchases/purchases/purchases.component';

const routes: Routes = [
  { 
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'product/:id',
    component:ProductComponent,
  },
  {
    path: 'offers',
    component:OffersComponent,
  },
  {
    path: 'offers2/:id',
    component:Offers2Component,
  },
  { path: 'how-to-sale',
    children: [
      { path: '', component:HowToSaleComponent },
      { path: 'ingress', component:IngressComponent },
      { path: 'product-register', component:ProductRegisterComponent },
      { path: 'product-upload', component:ProductUploadComponent }
    ]
  },
  { path: 'frequent-questions',
    children: [
      { path: '', component:FrequentQuestionsComponent },
      { path: 'question/:id', component:QuestionComponent },
    ]
  },
  {
    path: 'inform',
    component:InformComponent,
  },
  { path: 'seller',
    children: [
      { path: 'seller-data', component:SellerDataComponent },
      { path: 'sell', component:SellComponent },
      { path: 'seller-posts', component:SellerPostsComponent },
      { path: 'seller-purchases', component:PurchasesComponent },
      { path: 'completed-sales', component:CompletedSalesComponent },
      { path: 'rejected-sales', component:RejectedSalesComponent },
      { path: 'delete-posts', component:DeletePostsComponent },
      { path: 'notifications', component:NotificationsComponent },
      { path: 'payments', component:PaymentsComponent },
    ]
  },
  { path: 'admin',
    children: [
      { path: 'admin-data', component:AdminDataComponent },
      { path: 'banners',
        children: [
          { path: 'banners-options', component:BannersComponent },
          { path: 'banners-home', component:BannersHomeComponent },
          { path: 'banners-categories', component:BannersCategoriesComponent },
          { path: 'banners-others', component:BannersOthersComponent },
        ]
      },
      { path: 'admin-posts',
        children: [
          { path: 'admin-posts-control',  component:PostsControlComponent },
          { path: 'admin-posts-validate', component:PostsValidateComponent },
          { path: 'admin-sales-register', component:SalesRegisterComponent },
        ]
      },  
      {
        path: 'admin-categories',
        component:CategoriesComponent,
      },
      {
        path: 'admin-sellers',
        component:SellersComponent,
      },
      {
        path: 'admin-frequent-questions',
        component:AdminFrequentQuestionsComponent,
      },
      {
        path: 'admin-metrics',
        component:MetricsComponent,
      },
      {
        path: 'admin-notifications',
        component:AdminNotificationsComponent,
      },
      {
        path: 'admin-payments',
        component:AdminPaymentsComponent,
      },
    ]
  },
  {
    path: 'shopping-cart',
    component:ShoppingCartComponent,
  },
  {
    path: 'posttbk',
    component:PostTbkComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }



/*{ path: 'admin-posts',
  children: [
    { path: '', component:PostsComponent,},
    //{ path: 'admin-posts-form', component:PostsFormComponent },
    { path: 'admin-posts-control',
      children: [
        { path: '',  component:PostsControlComponent },
        { path: 'admin-posts-validate', component:PostsValidateComponent },
        { path: 'admin-sales-register', component:SalesRegisterComponent },
      ]
    },    
  ]
},*/