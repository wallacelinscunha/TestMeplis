import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestejsPageRoutingModule } from './testejs-routing.module';

import { TestejsPage } from './testejs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestejsPageRoutingModule
  ],
  declarations: [TestejsPage]
})
export class TestejsPageModule {}
