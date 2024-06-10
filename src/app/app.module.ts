import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BakedGoodsTableComponent } from './baked-goods-table/baked-goods-table.component';
import { FormsModule } from '@angular/forms';
import { NewBakedGoodsComponent } from './new-baked-goods/new-baked-goods.component';

@NgModule({
  declarations: [
    AppComponent,
    BakedGoodsTableComponent,
    NewBakedGoodsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
