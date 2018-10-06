import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdListComponent } from './prod-list/prod-list.component';
import { ProdListService } from './prod-list.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [ProdListComponent],
  providers: [ProdListService],
  exports: [ProdListComponent]
})
export class ProdListModule { }
