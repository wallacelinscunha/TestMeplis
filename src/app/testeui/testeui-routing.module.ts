import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TesteuiPage } from './testeui.page';

const routes: Routes = [
  {
    path: '',
    component: TesteuiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TesteuiPageRoutingModule {}
