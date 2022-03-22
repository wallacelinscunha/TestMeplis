import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http/http.service';
import { TesteJsService } from './testejs/testejs.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  exports: [],
  providers: [    
  ]
})
export class ServicesModule {
  constructor(@Optional() @SkipSelf() parentModule: ServicesModule) {
    if (parentModule) {
      throw new Error(
        'ServiceModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders<ServicesModule> {
    return {
      ngModule: ServicesModule,
      providers: [        
        HttpService,
        TesteJsService
      ]
    };
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/