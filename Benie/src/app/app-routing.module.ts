import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) }, { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) }, { path: 'contact', loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule) }, { path: 'discussions', loadChildren: () => import('./modules/discussions/discussions.module').then(m => m.DiscussionsModule) }, { path: 'navigation', loadChildren: () => import('./modules/navigation/navigation.module').then(m => m.NavigationModule) }, { path: 'poems', loadChildren: () => import('./modules/poems/poems.module').then(m => m.PoemsModule) }, { path: 'stories', loadChildren: () => import('./modules/stories/stories.module').then(m => m.StoriesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
