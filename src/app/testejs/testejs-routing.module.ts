import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestejsPage } from './testejs.page';

const routes: Routes = [
  {
    path: '',
    component: TestejsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestejsPageRoutingModule {}
