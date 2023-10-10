import { NgModule } from '@angular/core';

import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  exports: [
    MenuModule,
    MenubarModule,
    MenuModule
  ]
})
export class PrimeNgModule { }
