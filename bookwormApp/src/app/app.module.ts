import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/dashboard-pages/header/header.component';
import { MainDashboardComponent } from './pages/dashboard-pages/main-dashboard/main-dashboard.component';
import { AddBookPageComponent } from './pages/dashboard-pages/add-book-page/add-book-page.component';
import { AllBooksPageComponent } from './pages/dashboard-pages/all-books-page/all-books-page.component';
import { PieChartComponent } from './core/shared-components/pie-chart/pie-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { DashboardPageComponent } from './layout/dashboard-page/dashboard-page.component';
import { BookListComponent } from './core/shared-components/dashboard-shared-components/book-list/book-list.component';
import { BookItemComponent } from './core/shared-components/dashboard-shared-components/book-item/book-item.component';
import { BookDetailComponent } from './core/shared-components/dashboard-shared-components/book-detail/book-detail.component';
import { DropdownDirective } from './core/directive/dropdown.directive';
import { BookStartComponent } from './pages/dashboard-pages/book-start/book-start.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookEditComponent } from './core/shared-components/book-edit/book-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainDashboardComponent,
    AddBookPageComponent,
    AllBooksPageComponent,
    PieChartComponent,
    AuthPageComponent,
    DashboardPageComponent,
    BookListComponent,
    BookItemComponent,
    BookDetailComponent,
    DropdownDirective,
    BookStartComponent,
    BookEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
