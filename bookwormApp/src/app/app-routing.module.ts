import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookPageComponent } from './pages/dashboard-pages/add-book-page/add-book-page.component';
import { AllBooksPageComponent } from './pages/dashboard-pages/all-books-page/all-books-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { DashboardPageComponent } from './layout/dashboard-page/dashboard-page.component';
import { MainDashboardComponent } from './pages/dashboard-pages/main-dashboard/main-dashboard.component';
import { BookStartComponent } from './pages/dashboard-pages/book-start/book-start.component';
import { BookDetailComponent } from './core/shared-components/dashboard-shared-components/book-detail/book-detail.component';
import { BookEditComponent } from './core/shared-components/book-edit/book-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard/main', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardPageComponent, // this is the component with the <router-outlet> in the template
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      {
        path: 'main', // child route path
        component: MainDashboardComponent, // child route component that the router renders
      },
      {
        path: 'add',
        component: AddBookPageComponent, // another child route component that the router renders
      },
      {
        path: 'all',
        component: AllBooksPageComponent,
        children: [
          { path: '', component: BookStartComponent },
          { path: ':id', component: BookDetailComponent },
          { path: ':id/edit', component: BookEditComponent },
        ], // another child route component that the router renders
      },
    ],
  },

  { path: 'auth', component: AuthPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
