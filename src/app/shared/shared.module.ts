import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { CtaBarComponent } from './components/cta-bar/cta-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
   TopBarComponent,
   CtaBarComponent,
   TableComponent,
   FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
   TopBarComponent,
   CtaBarComponent,
   TableComponent,
   FooterComponent

    
  ]
})
export class SharedModule { }
