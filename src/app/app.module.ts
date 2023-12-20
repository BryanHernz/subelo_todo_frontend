import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsFormEditComponent } from './modules/admin/posts/posts-form/posts-form-edit/posts-form-edit.component';
import { PostsFormEditarItemComponent } from './modules/admin/posts/posts-form/posts-form-editar-item/posts-form-editar-item.component';
import { MatTableModule } from '@angular/material/table';
import { ValidateComponent } from './modules/admin/posts/posts-control/validate/validate.component';
import { EditCategoriesComponent } from './modules/admin/categories/edit-categories/edit-categories.component';
import { EditFrequentQuestionsComponent } from './modules/admin/admin-frequent-questions/edit-frequent-questions/edit-frequent-questions.component';
import { AdminNotificationsMarkReadComponent } from './modules/admin/notifications/admin-notifications-mark-read/admin-notifications-mark-read.component';
import { AdminNotificationsSeeMoreComponent } from './modules/admin/notifications/admin-notifications-see-more/admin-notifications-see-more.component';
import { AdminPaymentsEditDataComponent } from './modules/admin/payments/admin-payments-edit-data/admin-payments-edit-data.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbComponent, CarouselModule } from '@coreui/angular';
import { AdminVerticalMenuComponent } from './shared/components/admin-vertical-menu/admin-vertical-menu.component';
import { AlertDialogComponent } from './shared/components/alert-dialog/alert-dialog.component';
import { ConfirmationDialogComponent } from './shared/components/confirmation-dialog/confirmation-dialog.component';
import { EditBannerComponent } from './shared/components/edit-banner/edit-banner.component';
import { LogoutComponent } from './shared/components/logout/logout.component';
import { NumericInputComponent } from './shared/components/numeric-input/numeric-input.component';
import { SellerVerticalMenuComponent } from './shared/components/seller-vertical-menu/seller-vertical-menu.component';
import { SwiperGalleryComponent } from './shared/components/swiper-gallery/swiper-gallery.component';
import { UploadImageComponent } from './shared/components/upload-image/upload-image.component';
import { SigninComponent } from './shared/signin/signin.component';
import { SignupComponent } from './shared/signup/signup.component';
import { HomeComponent } from './modules/home/home.component';
import { SalesRegisterComponent } from './modules/admin/posts/posts-control/sales-register/sales-register.component';
import { PostsFormComponent } from './modules/admin/posts/posts-form/posts-form/posts-form.component';
import { PostsComponent } from './modules/admin/posts/posts/posts.component';
import { SellersComponent } from './modules/admin/sellers/sellers.component';
import { SellComponent } from './modules/seller/sell/sell.component';
import { RejectedSalesComponent } from './modules/seller/rejected-sales/rejected-sales/rejected-sales.component';
import { SellerPostsComponent } from './modules/seller/posts/seller-posts/seller-posts.component';
import { SellerDataComponent } from './modules/seller/personal-data/seller-data/seller-data.component';
import { AdminDataComponent } from './modules/admin/personal-data/admin-data/admin-data.component';
import { PostsControlComponent } from './modules/admin/posts/posts-control/posts-control/posts-control.component';
import { EditSellerDataComponent } from './modules/seller/personal-data/edit-seller-data/edit-seller-data.component';
import { PaymentsComponent } from './modules/seller/payments/payments/payments.component';
import { NotificationsComponent } from './modules/seller/notifications/notifications/notifications.component';
import { DeletePostsComponent } from './modules/seller/delete-posts/delete-posts/delete-posts.component';
import { CompletedSalesComponent } from './modules/seller/completed-sales/completed-sales/completed-sales.component';
import { ProductRegisterComponent } from './modules/sell-steps/product-register/product-register.component';
import { IngressComponent } from './modules/sell-steps/ingress/ingress.component';
import { FrequentQuestionsComponent } from './modules/questions/frequent-questions/frequent-questions.component';
import { QuestionComponent } from './modules/questions/question/question.component';
import { BannersHomeComponent } from './modules/admin/banners/banners-home/banners-home.component';
import { ProductComponent } from './modules/product/product.component';
import { OffersComponent } from './modules/offers/offers.component';
import { Offers2Component } from './modules/offers2/offers2.component';
import { MatCardModule } from '@angular/material/card';
import { NavComponent } from './core/nav/nav.component';
import { BannersCategoriesComponent } from './modules/admin/banners/banners-categories/banners-categories.component';
import { PostsValidateComponent } from './modules/admin/posts/posts-control/posts-validate/posts-validate.component';
import { AdminPaymentsComponent } from './modules/admin/payments/admin-payments/admin-payments.component';
import { AdminNotificationsComponent } from './modules/admin/notifications/admin-notifications/admin-notifications.component';
import { MetricsComponent } from './modules/admin/metrics/metrics.component';
import { CategoriesComponent } from './modules/admin/categories/categories/categories.component';
import { BannersComponent } from './modules/admin/banners/banners/banners.component';
import { BannersOthersComponent } from './modules/admin/banners/banners-others/banners-others.component';
import { AdminFrequentQuestionsComponent } from './modules/admin/admin-frequent-questions/admin-frequent-questions/admin-frequent-questions.component';
import { MatMenuModule } from '@angular/material/menu';
import { SeeMoreComponent } from './modules/seller/posts/see-more/see-more.component';
import { EditPostComponent } from './modules/seller/posts/edit-post/edit-post.component';
import { DeleteDialogComponent } from './shared/components/delete-dialog/delete-dialog.component';
import { EditAdminDataComponent } from './modules/admin/personal-data/edit-admin-data/edit-admin-data.component';
import { AddSubcategoryComponent } from './modules/admin/categories/add-subcategory/add-subcategory.component';
import { AddCategoryComponent } from './modules/admin/categories/add-category/add-category.component';
import { DeletePostsSeeMoreComponent } from './modules/seller/delete-posts/delete-posts-see-more/delete-posts-see-more.component';
import { DeletePostComponent } from './modules/seller/delete-posts/delete-post/delete-post.component';
import { ShoppingCartComponent } from './modules/shopping-cart/shopping-cart.component';
import { GalleriaModule } from 'primeng/galleria';
import { PostTbkComponent } from './shared/post-tbk/post-tbk.component';
import { CategoriesLocationsMenuComponent } from './shared/components/categories-locations-menu/categories-locations-menu.component';
import { PurchasesComponent } from './modules/seller/purchases/purchases/purchases.component'; 
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CompletedSalesSeeMoreComponent } from './modules/seller/completed-sales/completed-sales-see-more/completed-sales-see-more.component';
import { PurchasesSeeMoreComponent } from './modules/seller/purchases/purchases-see-more/purchases-see-more.component';
import { RejectPurchaseComponent } from './modules/seller/purchases/reject-purchase/reject-purchase.component';
import { RejectedSalesSeeMoreComponent } from './modules/seller/rejected-sales/rejected-sales-see-more/rejected-sales-see-more.component';
import { DeliverSellComponent } from './modules/seller/completed-sales/deliver-sell/deliver-sell.component';
import { SalesRegisterSeeMoreComponent } from './modules/admin/posts/posts-control/sales-register-see-more/sales-register-see-more.component';
import { AddQuestionCategoryComponent } from './modules/admin/admin-frequent-questions/add-question-category/add-question-category.component';
import { AddQuestionComponent } from './modules/admin/admin-frequent-questions/add-question/add-question.component';
import { EditQuestionCategoryComponent } from './modules/admin/admin-frequent-questions/edit-question-category/edit-question-category.component';
import { QuestionsProductComponent } from './shared/components/questions-product/questions-product.component';
import { FooterComponent } from './shared/footer/footer.component';



@NgModule({
    declarations: [
        AppComponent,
        PostsFormEditComponent,
        PostsFormEditarItemComponent,
        ValidateComponent,
        EditCategoriesComponent,
        EditFrequentQuestionsComponent,
        AdminNotificationsMarkReadComponent,
        AdminNotificationsSeeMoreComponent,
        AdminPaymentsEditDataComponent,
        SalesRegisterSeeMoreComponent,
        NumericInputComponent,
        SwiperGalleryComponent,
        SellerVerticalMenuComponent,
        FooterComponent,
        AdminVerticalMenuComponent,
        AlertDialogComponent,
        UploadImageComponent,
        EditBannerComponent,
        DeletePostComponent,
        ConfirmationDialogComponent,
        LogoutComponent,
        NavComponent,
        DeletePostsSeeMoreComponent,
        SigninComponent,
        HomeComponent,
        SalesRegisterComponent,
        EditAdminDataComponent,
        PostsFormComponent,
        RejectedSalesSeeMoreComponent,
        PostsComponent,
        SellersComponent,
        SellComponent,
        PurchasesSeeMoreComponent,
        RejectedSalesComponent,
        SellerPostsComponent,
        SellerDataComponent,
        AdminDataComponent,
        PostsControlComponent,
        EditSellerDataComponent,
        PaymentsComponent,
        ShoppingCartComponent,
        NotificationsComponent,
        DeletePostsComponent,
        CompletedSalesComponent,
        ProductRegisterComponent,
        IngressComponent,
        FrequentQuestionsComponent,
        QuestionComponent,
        BannersHomeComponent,
        AdminPaymentsComponent,
        AdminNotificationsComponent,
        MetricsComponent,
        ProductComponent,
        OffersComponent,
        CategoriesComponent,
        AddCategoryComponent,
        AddSubcategoryComponent,
        PostsValidateComponent,
        Offers2Component,
        EditPostComponent,
        BannersComponent,
        BannersOthersComponent,
        AdminFrequentQuestionsComponent,
        SeeMoreComponent,
        BannersCategoriesComponent,
        SignupComponent,
        DeleteDialogComponent,
        PostTbkComponent,
        CategoriesLocationsMenuComponent,
        PurchasesComponent,
        CompletedSalesSeeMoreComponent,
        RejectPurchaseComponent,
        DeliverSellComponent,
        AddQuestionCategoryComponent,
        AddQuestionComponent,
        EditQuestionCategoryComponent,
        QuestionsProductComponent
    ],
    providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
    bootstrap: [AppComponent],
    imports: [
        MatCardModule,
        CarouselModule, 
        FormsModule, 
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatInputModule,
        MatTableModule,
        ReactiveFormsModule,
        HttpClientModule,
        BreadcrumbComponent,
        CommonModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule,
        FlexLayoutModule,
        RouterLink,
        FormsModule,
        GalleriaModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
      ],
      exports: [
        BreadcrumbComponent,
        NumericInputComponent,
        NavComponent,
        FooterComponent,
        SellerVerticalMenuComponent,
        AdminVerticalMenuComponent,
        AlertDialogComponent,
        UploadImageComponent,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
