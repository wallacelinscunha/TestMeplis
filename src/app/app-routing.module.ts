import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'testejs',
    pathMatch: 'full'
  },
  {
    path: 'testejs',
    loadChildren: () => import('./testejs/testejs.module').then( m => m.TestejsPageModule)
  },
  {
    path: 'testeui',
    loadChildren: () => import('./testeui/testeui.module').then( m => m.TesteuiPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
