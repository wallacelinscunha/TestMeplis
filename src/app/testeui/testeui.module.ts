import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TesteuiPageRoutingModule } from './testeui-routing.module';

import { TesteuiPage } from './testeui.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TesteuiPageRoutingModule
  ],
  declarations: [TesteuiPage]
})
export class TesteuiPageModule {}
