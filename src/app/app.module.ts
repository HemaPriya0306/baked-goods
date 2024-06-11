import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BakedGoodsTableComponent } from './baked-goods-table/baked-goods-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewBakedGoodsComponent } from './new-baked-goods/new-baked-goods.component';
import { NotificationComponent } from './shared/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    BakedGoodsTableComponent,
    NewBakedGoodsComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
